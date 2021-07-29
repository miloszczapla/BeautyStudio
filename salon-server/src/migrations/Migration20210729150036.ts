import { Migration } from '@mikro-orm/migrations';

export class Migration20210729150036 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" add column "note" text not null default \'\';');
  }

}
