import {FieldTypeEnum} from "../enums/field-type.enum";
import {IsBoolean, IsOptional, IsString} from "class-validator";

export class FieldModel {
    @IsString()
    name: string;

    type: FieldTypeEnum;

    maxLength?: number;

    precision?: number;

    @IsOptional()
    @IsBoolean()
    isId = false;

    /**
     * Put here the schema id that this field references, ifthis field is
     */
    schemaId?: string;
}
