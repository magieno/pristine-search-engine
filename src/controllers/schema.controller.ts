import {body, controller, route} from "@pristine-ts/networking";
import {bodyValidation} from "@pristine-ts/validation";
import {SchemaModel} from "../models/schema.model";
import {HttpMethod} from "@pristine-ts/common";
import {injectable} from "tsyringe";
import {SchemaManager} from "../managers/schema.manager";

@injectable()
@controller("/schemas")
export class SchemaController {
    constructor(private readonly schemaManager: SchemaManager) {
    }

    @route(HttpMethod.Post, "")
    @bodyValidation(SchemaModel)
    create(@body() schemaModel: SchemaModel) {
        this.schemaManager.
    }

    @route(HttpMethod.Put, "/:id")
    @bodyValidation(SchemaModel)
    update(@body() schemaModel: SchemaModel) {

    }
}
