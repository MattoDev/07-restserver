var cors = require("cors");
const express = require("express");
const { dbConnection } = require("../database/config");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/users";
    this.authPath = "/api/auth";
    //Concetar a base de datos
    this.conectarDB();
    //Middleware : funciones que van a añadirle otra funcionalidad a mi webServer

    this.middlewares();
    //Rutas de mi aplicacion
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    //CORS
    this.app.use(cors());
    //Lectura y parseo del body
    this.app.use(express.json());
    //Directorio publico
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(this.authPath, require("../routes/auth"));
    this.app.use(this.usersPath, require("../routes/user"));
  }

  lister() {
    this.app.listen(this.port, () => {
      console.log("servidor corriendo en puerto: ", this.port);
    });
  }
}

module.exports = Server;
