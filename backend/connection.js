// import { Sequelize,DataTypes,Op } from "sequelize";
import pkg from "sequelize";
const { Sequelize, DataTypes, Op } = pkg;
import dotenv from "dotenv";
dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL,
  SQL_USER,
  SQL_PASSWORD,
  SQL_DATABASE,
  SQL_SERVER,
  JWT_SECRET,
} = process.env;

const sequelize = new Sequelize("sequelizeDB", "sa", "12122012@Asif", {
  dialect: "mssql",
  host: "172.16.1.104",
  port: "1433",
});

const connection = {
  sequelize: sequelize,
  DataTypes: DataTypes,
  Op: Op,
};
export default connection;
