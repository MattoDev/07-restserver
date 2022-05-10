const express = require("express");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    //Middleware : funciones que van a añadirle otra funcionalidad a mi webServer
    this.middlewares();
    //Rutas de mi aplicacion
    this.routes();
  }

  middlewares() {
    //Directorio publico
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.get("/api", (req, res) => {
      res.json({
        msg: "get API",
      });
    });
    this.app.put("/api", (req, res) => {
      res.json({
        msg: "put API",
      });
    });
    this.app.post("/api", (req, res) => {
      res.json({
        msg: "post API",
      });
    });
    this.app.delete("/api", (req, res) => {
      res.json({
        msg: "delete API",
      });
    });
  }

  lister() {
    this.app.listen(this.port, () => {
      console.log("servidor corriendo en puerto: ", this.port);
    });
  }
}

module.exports = Server;
