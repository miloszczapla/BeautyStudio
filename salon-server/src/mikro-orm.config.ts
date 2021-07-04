import { PROD } from './constans';
import { Treatment } from './entities/Treatment';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';
import { User } from './entities/User';

//File containing db name, login, password
import { db } from './sensitiveData';

export default {
  migrations: {
    //migration config
    path: path.join(__dirname, './migrations'), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    disableForeignKeys: false, //solve error: "set session_replication_role = 'replica';"
  },
  //database connection
  type: 'postgresql',
  //database tables
  entities: [Treatment, User],
  dbName: db.dbName,
  user: db.user,
  password: db.password,
  debug: !PROD,
} as Parameters<typeof MikroORM.init>[0]; //sets type of export and helps with autocomplection
