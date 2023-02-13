import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { CustomType } from "./CustomType";

@Entity({
    tableName: "foo",
})
export class Foo {
    @PrimaryKey()
    id!: string;

    @Property()
    title!: string;

    @Property({
        type: new CustomType(),
    })
    test: any;
}
