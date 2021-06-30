import { EntityManager, IDatabaseDriver, Connection } from '@mikro-orm/core';

//type of MyContex used acros all resolvers
export type MyContex = {
  em: EntityManager<IDatabaseDriver<Connection>>;
};
