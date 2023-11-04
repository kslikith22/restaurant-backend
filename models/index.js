import { dbCon } from "../dbConfig.js";

import { Sequelize, DataTypes } from "sequelize";


export const sequelize = new Sequelize(
    dbCon.DB,
    dbCon.USER,
    dbCon.PASSWORD,

    {
        host: dbCon.HOST,
        dialect: dbCon.dialect,
        operatorsAliases: false,
        pool: {
            max: dbCon.pool.max,
            min: dbCon.pool.min,
            acquire: dbCon.pool.acquire,
            idle: dbCon.pool.idle

        }
    }
)

sequelize.authenticate().then(()=>{
    console.log("Connected")
}).catch((err)=>console.log(err))



