"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constans_1 = require("./constans");
const Treatment_1 = require("./entities/Treatment");
const posix_1 = __importDefault(require("path/posix"));
exports.default = {
    migrations: {
        path: posix_1.default.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    type: 'postgresql',
    entities: [Treatment_1.Treatment],
    dbName: 'salon',
    user: 'milosz',
    password: 'Il98uuu7k2f',
    debug: !constans_1.PROD,
};
//# sourceMappingURL=mikro-orm.config.js.map