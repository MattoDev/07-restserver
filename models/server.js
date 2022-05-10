var cors = require("cors");
const express = require("express");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/users";
    //Middleware : funciones que van a añadirle otra funcionalidad a mi webServer

    this.middlewares();
    //Rutas de mi aplicacion
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());
    //Directorio publico
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(this.usersPath, require("../routes/user"));
  }

  lister() {
    this.app.listen(this.port, () => {
      console.log("servidor corriendo en puerto: ", this.port);
    });
  }
}

module.exports = Server;
