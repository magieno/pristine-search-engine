import {FieldTypeEnum} from "../enums/field-type.enum";
import {IsBoolean, IsEnum, IsInt, IsOptional, IsString} from "class-validator";

export class FieldModel {
    /**
     * This property represents the unique name of the field.
     */
    @IsString()
    name: string;

    /**
     * This property represents the underlying type of the data this field contains.
     */
    @IsEnum(FieldTypeEnum)
    type: FieldTypeEnum;

    /**
     * This property represents the maximum length that the underlying data this field contains can have.
     */
    @IsInt()
    @IsOptional()
    maxLength?: number;

    /**
     * This property represents the number of significant digits that are stored with this value.
     */
    @IsInt()
    @IsOptional()
    precision?: number;

    /**
     * Put here the schema id that this field references, if this field type is of FOREIGN_KEY type.
     */
    @IsOptional()
    @IsString()
    schemaId?: string;
}
