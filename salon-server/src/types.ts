import { EntityManager, IDatabaseDriver, Connection } from '@mikro-orm/core';

export type MyContex = {
  em: EntityManager<IDatabaseDriver<Connection>>;
};
