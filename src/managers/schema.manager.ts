import {injectable} from "tsyringe";
import {SchemaModel} from "../models/schema.model";
import {DuplicateFieldIdError} from "../errors/duplicate-field-id.error";
import {UniqueIdentifierFieldNotFoundError} from "../errors/unique-identifier-field-not-found.error";
import {ForeignKeySchemaNotFoundError} from "../errors/foreign-key-schema-not-found.error";
import {SchemaAlreadyExistsError} from "../errors/schema-already-exists.error";
import {SchemaDoesntExistError} from "../errors/schema-doesnt-exist.error";

@injectable()
export class SchemaManager {
    /**
     *
     * @param schema
     */
    private async validateSchemaAndThrow(schema: SchemaModel): Promise<void> {
        // Validate that all the fields have unique names
        const fields: string[] = schema.fields.map(value => value.schemaId) as string[];
        const duplicatesIds = fields.filter(field => fields.indexOf(field) != fields.lastIndexOf(field));

        if(duplicatesIds.length != 0) {
            throw new DuplicateFieldIdError(duplicatesIds);
        }

        // Check if the uniqueIdentifierField exists in the list of fields.
        if(fields.indexOf(schema.uniqueIdentifierField) === -1) {
            throw new UniqueIdentifierFieldNotFoundError(schema.uniqueIdentifierField);
        }

        // Check if there's a field that references a schema, that the schema already exists
        for (let field of schema.fields) {
            if(field.schemaId === undefined) {
                continue;
            }

            const referenceSchema = await this.get(field.schemaId);

            if(referenceSchema === null) {
                throw new ForeignKeySchemaNotFoundError(field.schemaId, field.name)
            }
        }
    }

    /**
     *
     * @param schema
     */
    async update(schema: SchemaModel): Promise<void> {
        // Ensure that the schema already exists
        if(await this.get(schema.id) === null) {
            throw new SchemaDoesntExistError(schema.id);
        }

        await this.validateSchemaAndThrow(schema);

        // Save the schema
    }

    /**
     *
     * @param schema
     */
    async create(schema: SchemaModel): Promise<void> {
        // Ensure that the schema doesn't already exist
        if(await this.get(schema.id) !== null) {
            throw new SchemaAlreadyExistsError(schema.id);
        }

        await this.validateSchemaAndThrow(schema);

        // Save the schema
    }

    /**
     *
     * @param id
     */
    async get(id: string): Promise<SchemaModel | null> {
        return null;
    }
}
