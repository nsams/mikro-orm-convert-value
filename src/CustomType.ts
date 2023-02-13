import { Type } from "@mikro-orm/core";
import { CustomClass } from "./CustomCls";

export class CustomType extends Type<CustomClass, any> {
    convertToDatabaseValue(value: CustomClass) {
        console.trace();
        return value.value;
    }
    convertToJSValue(value: any) {
        return new CustomClass(value);
    }
}
