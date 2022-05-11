const { Router } = require("express");
const { check } = require("express-validator");

const {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers,
  pacthUsers,
} = require("../controllers/users.controller");
const { validRole } = require("../helpers/db-validators");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.get("/", getUsers);
router.put("/:id", putUsers);
router.post(
  "/",
  [
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
    check("password", "el password debe de ser mas de 6 letras").isLength({
      min: 6,
    }),
    check("correo", "el correo no es valido").isEmail(),
    check("rol").custom(validRole),
    validarCampos,
  ],
  postUsers
);
router.delete("/", deleteUsers);
router.patch("/", pacthUsers);

module.exports = router;
