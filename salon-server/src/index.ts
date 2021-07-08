import 'reflect-metadata';
import express from 'express';
import { MikroORM } from '@mikro-orm/core';
import { PORT, PROD } from './constans';
import mikroORMConfig from './mikro-orm.config';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import { TreatmentResolver } from './resolvers/treatment';
import { UserResolver } from './resolvers/user';
import session from 'express-session';
import redis from 'redis';
import connectRedis from 'connect-redis';
import { MyContex } from './types';


//everything in async functions to catch errors and give ability to use await key word
const main = async () => {
  //start mikro orm with configuration passed
  const orm = await MikroORM.init(mikroORMConfig);
  //migrattion up
  await orm.getMigrator().up({});

  //express framework raise
  const app = express();

  //Create redis instance
  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();

  //Add session to redis and cookie
  app.use(
    session({
      name: 'qid',
      store: new RedisStore({
        client: redisClient,
        ttl: 60 * 60 * 24 * 4, // 4 days
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
        httpOnly: true,
        sameSite: 'lax',
        secure: PROD, // cookie only works in production
      },
      saveUninitialized: false,
      secret: 'ewqrwetewqrweqrtqwer',
      resave: false,
    })
  );

  //apolloserver for grapql start and config
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      //resolvers from resolves folder
      resolvers: [TreatmentResolver, UserResolver],
      validate: false,
    }),
    //passing contex
    context: ({ req, res }): MyContex => ({ em: orm.em, req, res }),
  });

  //adding apolloserver to express app
  apolloServer.applyMiddleware({ app });

  //homepage
  app.get('/', (_, res) => {
    res.send('hello world');
  });

  //assurance that server is up
  app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);
  });
};

//starting all app and error catching
main().catch((err) => {
  console.log(err);
});
