import 'reflect-metadata';
import express from 'express';
import { MikroORM } from '@mikro-orm/core';
import { PORT } from './constans';
import mikroORMConfig from './mikro-orm.config';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { TreatmentResolver } from './resolvers/treatment';
import { UserResolver } from './resolvers/user';

//everything in async functions to catch errors and give ability to use await key word
const main = async () => {
  //start mikro orm with configuration passed
  const orm = await MikroORM.init(mikroORMConfig);
  //migrattion up
  await orm.getMigrator().up({});

  //express framework raise
  const app = express();

  //apolloserver for grapql start and config
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      //resolvers from resolves folder
      resolvers: [TreatmentResolver, UserResolver],
      validate: false,
    }),
    //passing contex
    context: () => ({ em: orm.em }),
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
