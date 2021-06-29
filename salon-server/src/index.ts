import 'reflect-metadata';
import express from 'express';
import { MikroORM } from '@mikro-orm/core';
import { PORT } from './constans';
import mikroORMConfig from './mikro-orm.config';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { TreatmentResolver } from './resolvers/treatment';

const main = async () => {
  const orm = await MikroORM.init(mikroORMConfig);
  await orm.getMigrator().up();

  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [TreatmentResolver],
      validate: false,
    }),
    context: () => ({ em: orm.em }),
  });

  apolloServer.applyMiddleware({ app });

  app.get('/', (_, res) => {
    res.send('hello world');
  });
  app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);
  });
};

main().catch((err) => {
  console.log(err);
});
