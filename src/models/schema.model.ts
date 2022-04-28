import {FieldTypeEnum} from "../enums/field-type.enum";
import {FieldModel} from "./field.model";

export class SchemaModel {
    id: string;

    fields: FieldModel[] = [];
}
