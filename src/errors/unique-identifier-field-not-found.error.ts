import {HttpError} from "@pristine-ts/networking";

export class UniqueIdentifierFieldNotFoundError extends HttpError {
    public constructor(readonly uniqueIdentifierField: string) {
        super(400, "Can't find the unique identifier field. The field with id : '" + uniqueIdentifierField +"' cannot be defined as the unique identifier for the schema because it wasn't found.");

        // Set the prototype explicitly.
        // As specified in the documentation in TypeScript
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, UniqueIdentifierFieldNotFoundError.prototype);
    }
}
