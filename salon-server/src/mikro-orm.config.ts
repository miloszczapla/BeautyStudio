import { PROD } from './constans';
import { Treatment } from './entities/Treatment';
import { MikroORM } from '@mikro-orm/core';
import path from 'path/posix';
import { User } from './entities/User';

export default {
  migrations: {
    path: path.join(__dirname, './migrations'), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
  type: 'postgresql',
  entities: [Treatment, User],
  dbName: 'salon',
  user: 'milosz',
  password: 'Il98uuu7k2f',
  debug: !PROD,
} as Parameters<typeof MikroORM.init>[0];
