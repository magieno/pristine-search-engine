import {HttpError} from "@pristine-ts/networking";

export class SchemaAlreadyExistsError extends HttpError {
    public constructor(readonly schemaId: string) {
        super(400, "Cannot create a schema with id: '" + schemaId + "' since it already exists.");

        // Set the prototype explicitly.
        // As specified in the documentation in TypeScript
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, SchemaAlreadyExistsError.prototype);
    }
}
