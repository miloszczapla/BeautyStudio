import { Migration } from '@mikro-orm/migrations';

export class Migration20210809194442 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" add column "specialist_note" text not null default \'\';');

    this.addSql('alter table "treatment" add column "section" text not null, add column "description" text not null, add column "price" int4 not null;');
  }

}
