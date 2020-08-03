import dotenv from 'dotenv';
import { EnvEnum, LoggerEnum } from './config.enum';

dotenv.config();

const env = process.env.NODE_ENV;
const port = parseInt(process.env.PORT, 10);
const apiUrl = env === EnvEnum.DEVELOPMENT
    ? `${process.env.API_URL}:${port}`
    : process.env.API_URL;
const dbUrl = process.env.DB_URL;
const logger = env === EnvEnum.DEVELOPMENT
    ? LoggerEnum.DEVELOPMENT
    : LoggerEnum.PRODUCTION;

const isDev = (env === EnvEnum.DEVELOPMENT);

export default {
    logger,
    env,
    port,
    apiUrl,
    dbUrl,
    isDev,
}
