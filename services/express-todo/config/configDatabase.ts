import "reflect-metadata"
import { DataSource } from "typeorm"
import config from '../env.config'

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: config.HOST_LOCAL_IP,
    port:  5431 ,
    username: 'user',
    password: 'password',
    database: 'postgre_db_todo',
    synchronize: false,
    logging: true,
    migrationsTableName: 'migrations',
    entities: ['entity/**/*{.ts,.js}'],
    migrations: ['migrations/**/*{.ts,.js}'],
})
