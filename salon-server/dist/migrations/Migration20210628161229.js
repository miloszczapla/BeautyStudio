"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20210628161229 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20210628161229 extends migrations_1.Migration {
    up() {
        return __awaiter(this, void 0, void 0, function* () {
            this.addSql('create table "user" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "email" text not null, "name" text not null, "sur_name" text not null, "password" text not null, "phone" text not null);');
            this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');
            this.addSql('alter table "user" add constraint "user_phone_unique" unique ("phone");');
        });
    }
}
exports.Migration20210628161229 = Migration20210628161229;
//# sourceMappingURL=Migration20210628161229.js.map