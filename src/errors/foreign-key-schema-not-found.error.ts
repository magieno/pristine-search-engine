export class ForeignKeySchemaNotFoundError extends Error {
    public constructor(readonly referencingSchemaId: string, readonly fieldId: string) {
        super("Can't find the schema with unique identifier '" + referencingSchemaId + "'. The schema is being referenced as a foreign key for the field with name: '" + fieldId + "'");

        // Set the prototype explicitly.
        // As specified in the documentation in TypeScript
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, ForeignKeySchemaNotFoundError.prototype);
    }
}