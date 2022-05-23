var cors = require("cors");
const express = require("express");
const { dbConnection } = require("../database/config");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      auth: "/api/auth",
      users: "/api/users",
      categorias: "/api/categorias",
      customers: "/api/customers"
    };

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
    this.app.use(this.paths.auth, require("../routes/auth"));
    this.app.use(this.paths.users, require("../routes/user"));
    this.app.use(this.paths.categorias, require("../routes/categorias"));
    this.app.use(this.paths.customers, require("../routes/customers"));
  }

  lister() {
    this.app.listen(this.port, () => {
      console.log("servidor corriendo en puerto: ", this.port);
    });
  }
}

module.exports = Server;
