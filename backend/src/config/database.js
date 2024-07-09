import { Sequelize } from '@sequelize/core';

import configuration from './config.js';


const database = new Sequelize(configuration.database);

export default database;
