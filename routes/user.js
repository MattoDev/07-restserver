const { Router } = require("express");
const { check } = require("express-validator");
const {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers,
  pacthUsers,
} = require("../controllers/users.controller");

const router = Router();

router.get("/", getUsers);
router.put("/:id", putUsers);
router.post(
  "/",
  [check("correo", "el correo no es valido").isEmail()],
  postUsers
);
router.delete("/", deleteUsers);
router.patch("/", pacthUsers);

module.exports = router;
