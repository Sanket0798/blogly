import mysql from "mysql";

export const db = mysql.createConnection({
  // host: "localhost",
  // user: "root",
  // password: "Sanket@123",
  // database: "blog",
  // insecureAuth: true,

  host: "localhost",
  user: "root",
  password: "password",
  database: "blog",
  // port: 3306,
});
