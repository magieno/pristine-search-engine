import {FieldTypeEnum} from "../enums/field-type.enum";
import {FieldModel} from "./field.model";
import {IsArray, IsString, MinLength} from "class-validator";

export class SchemaModel {
    /**
     * The unique id that uniquely identifies the schema.
     */
    @IsString()
    id: string;

    /**
     * An array of fields that compose the schema.
     */
    @IsArray()
    fields: FieldModel[] = [];

    /**
     * This represents the id of the field that acts as the identifier.
     */
    @IsString()
    uniqueIdentifierField: string = "";
}
