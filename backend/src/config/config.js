import dotenv from 'dotenv';
import { MySqlDialect } from '@sequelize/mysql';

dotenv.config();

const configuration = {
    database: {
        dialect: MySqlDialect,
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    app: {
        port: process.env.APP_PORT ?? 8080,
        passphrase: process.env.APP_PASSPHRASE ?? 'my-random-string',
    }
};

export default configuration;
