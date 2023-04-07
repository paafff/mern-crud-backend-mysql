import { Sequelize } from "sequelize";

const db = new Sequelize("mern_crud", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
