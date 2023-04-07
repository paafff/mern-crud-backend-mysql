import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const userDb = db.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

// auto generate table bang
// IIFE
// IIFE
// IIFE
// IIFE
// IIFE

(async () => {
  await db.sync();
})();

export default userDb;
