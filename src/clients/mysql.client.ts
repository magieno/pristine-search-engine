import {inject, injectable} from "tsyringe";
import mysql, {Connection, PoolConnection} from "mysql2/promise";

@injectable()
export class MysqlClient {
    constructor(@inject("%mysql.host%") private readonly host: string,
                @inject("%mysql.port%") private readonly port: number,
                @inject("%mysql.username%") private readonly username: string,
                @inject("%mysql.password%") private readonly password: string,
                @inject("%mysql.database%") private readonly database: string) {
    }

    async getConnection(): Promise<Connection | PoolConnection> {
        return mysql.createConnection({
            host: this.host,
            port: this.port,
            user: this.username,
            password: this.password,
            database: this.database,
        })
    }
}
