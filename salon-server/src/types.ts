import { EntityManager, IDatabaseDriver, Connection } from '@mikro-orm/core';
import { Request, Response } from 'express';

//type of MyContex used acros all resolvers
export type MyContex = {
  em: EntityManager<IDatabaseDriver<Connection>>;

  req: Request & {
    session: { [key: string]: any };
  };
  res: Response;
};
