"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constans_1 = require("./constans");
const Treatment_1 = require("./entities/Treatment");
const path_1 = __importDefault(require("path"));
const User_1 = require("./entities/User");
const sensitiveData_1 = require("./sensitiveData");
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
        disableForeignKeys: false,
    },
    type: 'postgresql',
    entities: [Treatment_1.Treatment, User_1.User],
    dbName: sensitiveData_1.db.dbName,
    user: sensitiveData_1.db.user,
    password: sensitiveData_1.db.password,
    debug: !constans_1.PROD,
};
//# sourceMappingURL=mikro-orm.config.js.map