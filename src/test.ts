import { MikroORM } from "@mikro-orm/sqlite";
import { CustomClass } from "./CustomCls";
import { Foo } from "./Foo";
import config from "./mikro-orm.config";

async function main() {
    const orm = await MikroORM.init(config);

    const fooRepo = orm.em.fork().getRepository(Foo);
    /*
    {
        const row = fooRepo.create({
            id: "123",
            title: "title 123",
            test: new CustomClass({
                bar: "bar",
            }),
        });
        await fooRepo.flush();
        console.log("foo");
    }
    */
    {
        const row1 = await fooRepo.findOne({ id: "123" });
        console.log(row1);
    }
}
main().then(() => {
    process.exit();
});
