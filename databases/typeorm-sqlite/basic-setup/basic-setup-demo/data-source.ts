import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "registrar",
  entities: [__dirname + "/**/*.entity{.ts,.js}"],
  synchronize: true,
})
