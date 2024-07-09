import dotenv from 'dotenv';


dotenv.config();

const configuration = {
    database: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        connectionLimit: process.env.DB_CONNECTION_LIMIT ?? 10,
    },
    app: {
        port: process.env.APP_PORT ?? 8080,
    }
};

export default configuration;
