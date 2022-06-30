import { DataSource } from "typeorm";
import { User } from "./src/database/entities/User.entity";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'projeto-cultural',
    synchronize: true,
    entities: [ User ],
    migrations: [
         __dirname + "/src/database/migrations/*.ts"
    ],
   
  });
  
