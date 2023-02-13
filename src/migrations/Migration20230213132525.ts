import { Migration } from "@mikro-orm/migrations";

export class Migration20230213132525 extends Migration {
    async up(): Promise<void> {
        this.addSql("create table `foo` (`id` text not null, `title` text not null, `test` text not null, primary key (`id`));");
        this.addSql("insert into `foo` (`id`, `title`, `test`) values ('123', 'title 123', '{\"bar\":\"bar\"}')");
    }
}
