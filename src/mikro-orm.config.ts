import { defineConfig } from "@mikro-orm/core";
import { Foo } from "./Foo";

export default defineConfig({
    entities: [Foo],
    dbName: "test-db",
    type: "sqlite",
    debug: true,
    migrations: {
        path: "dist/migrations",
        pathTs: "src/migrations",
    },
});
