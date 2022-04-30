export class DuplicateFieldIdError extends Error {
    public constructor(readonly duplicatedFields: string[]) {
        super("These fields appear more than once: '" + duplicatedFields.toString() + "'.");

        // Set the prototype explicitly.
        // As specified in the documentation in TypeScript
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, DuplicateFieldIdError.prototype);
    }
}
