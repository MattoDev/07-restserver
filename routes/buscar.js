<<<<<<< HEAD
=======

>>>>>>> d6511db5eee0a788936809ccfb833a4140acbcd6
const { Router } = require("express");
const { buscar } = require("../controllers/buscar");

const router = Router();

router.get("/:coleccion/:termino", buscar);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> d6511db5eee0a788936809ccfb833a4140acbcd6
