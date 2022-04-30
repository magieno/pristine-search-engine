import {HttpError} from "@pristine-ts/networking";

export class SchemaDoesntExistError extends HttpError {
    public constructor(readonly schemaId: string) {
        super(400, "The schema with id: '" + schemaId + "' doesn't exist.");

        // Set the prototype explicitly.
        // As specified in the documentation in TypeScript
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, SchemaDoesntExistError.prototype);
    }
}
