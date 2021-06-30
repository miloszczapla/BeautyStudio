import { Migration } from '@mikro-orm/migrations';

export class Migration20210630193746 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" drop constraint if exists "user_sur_name_check";');
    this.addSql('alter table "user" alter column "sur_name" type text using ("sur_name"::text);');
    this.addSql('alter table "user" alter column "sur_name" drop not null;');
    this.addSql('alter table "user" drop constraint if exists "user_sms_notification_check";');
    this.addSql('alter table "user" alter column "sms_notification" type bool using ("sms_notification"::bool);');
    this.addSql('alter table "user" alter column "sms_notification" set default true;');
    this.addSql('alter table "user" drop constraint if exists "user_email_notification_check";');
    this.addSql('alter table "user" alter column "email_notification" type bool using ("email_notification"::bool);');
    this.addSql('alter table "user" alter column "email_notification" set default false;');
    this.addSql('alter table "user" drop constraint if exists "user_user_image_check";');
    this.addSql('alter table "user" alter column "user_image" type varchar(255) using ("user_image"::varchar(255));');
    this.addSql('alter table "user" alter column "user_image" drop not null;');

    this.addSql('alter table "user" drop constraint "user_user_image_unique";');
  }

}
