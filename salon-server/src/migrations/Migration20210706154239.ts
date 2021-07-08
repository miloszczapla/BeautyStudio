import { Migration } from '@mikro-orm/migrations';

export class Migration20210706154239 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" drop constraint if exists "user_sur_name_check";');
    this.addSql('alter table "user" alter column "sur_name" type text using ("sur_name"::text);');
    this.addSql('alter table "user" alter column "sur_name" set default \'\';');
    this.addSql('alter table "user" drop constraint if exists "user_user_image_check";');
    this.addSql('alter table "user" alter column "user_image" type varchar(255) using ("user_image"::varchar(255));');
    this.addSql('alter table "user" alter column "user_image" set default \'\';');
  }

}
