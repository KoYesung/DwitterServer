import { config } from '../config.js'; 
import SQ from 'sequelize';

const { host, user, database, password } = config.db
// mysql
// const pool = mysql.createPool({
//     host,
//     user,
//     database,
//     password
// })


export const sequelize = new SQ.Sequelize(database, user, password, {
    host: host,
    dialect: 'mariadb',
    logging: false,
    timezone: "+09:00",
    port:'31256'
})