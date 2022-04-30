import {AppModuleInterface} from "@pristine-ts/common";
import {AwsModule} from "@pristine-ts/aws";
import {NetworkingModule} from "@pristine-ts/networking";
import {CoreModule} from "@pristine-ts/core";
import {LoggingModule} from "@pristine-ts/logging";
import {SecurityModule} from "@pristine-ts/security";
import {TelemetryModule} from "@pristine-ts/telemetry";
import {RedisModule} from "@pristine-ts/redis";
import {ValidationModule} from "@pristine-ts/validation";
import {AwsXrayModule} from "@pristine-ts/aws-xray";
import {Auth0Module} from "@pristine-ts/auth0";
import {HttpModule} from "@pristine-ts/http";
import {StripeModule} from "@pristine-ts/stripe";
import {EnvironmentVariableResolver, NumberResolver} from "@pristine-ts/configuration";
import {MysqlClient} from "./clients/mysql.client";
import {SchemaManager} from "./managers/schema.manager";
import {SchemaController} from "./controllers/schema.controller";

export const AppModuleKeyname =  "pristine.search.engine";

export const AppModule: AppModuleInterface = {

    importServices: [
        // Controllers
        SchemaController,

        // Clients
        MysqlClient,

        // Managers
        SchemaManager,
    ],
    importModules: [
        AwsModule,
        Auth0Module,
        AwsXrayModule,
        CoreModule,
        HttpModule,
        LoggingModule,
        NetworkingModule,
        RedisModule,
        SecurityModule,
        StripeModule,
        ValidationModule,
        TelemetryModule,
    ],
    keyname: AppModuleKeyname,
    configurationDefinitions: [
        {
            parameterName: "mysql.host",
            defaultValue: "localhost",
            isRequired: false,
            defaultResolvers: [
                new EnvironmentVariableResolver("MYSQL_HOST"),
            ],
        },
        {
            parameterName: "mysql.port",
            defaultValue: "33060",
            isRequired: false,
            defaultResolvers: [
                new NumberResolver(new EnvironmentVariableResolver("MYSQL_PORT")),
            ],
        }, {
            parameterName: "mysql.username",
            defaultValue: "root",
            isRequired: false,
            defaultResolvers: [
                new EnvironmentVariableResolver("MYSQL_USERNAME"),
            ],
        }, {
            parameterName: "mysql.password",
            defaultValue: "root",
            isRequired: false,
            defaultResolvers: [
                new EnvironmentVariableResolver("MYSQL_PASSWORD"),
            ],
        }, {
            parameterName: "mysql.database",
            defaultValue: "pristine-search-engine",
            isRequired: false,
        }
    ]
};
