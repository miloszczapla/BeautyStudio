import { Migration } from '@mikro-orm/migrations';

export class Migration20210628162139 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "email" text not null, "name" text not null, "sur_name" text not null, "password" text not null, "phone" text not null, "sms_notification" bool not null, "email_notification" bool not null, "user_image" varchar(255) not null);');
    this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');
    this.addSql('alter table "user" add constraint "user_phone_unique" unique ("phone");');
    this.addSql('alter table "user" add constraint "user_user_image_unique" unique ("user_image");');
  }

}
