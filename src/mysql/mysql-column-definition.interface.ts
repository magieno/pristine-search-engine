export interface MysqlColumnDefinition {
    type: "INT" | "DOUBLE";
    length?: number;
    decimals?: number;
}
