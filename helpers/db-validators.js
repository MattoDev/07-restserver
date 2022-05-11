const Role = require("../models/role");
const Usuario = require("../models/usuario");

const validRole = async (rol = "") => {
  const rolExist = await Role.findOne({ rol });
  if (!rolExist) {
    throw new Error(`El rol ${rol} no esta registrado en la BD`);
  }
};

const emailExist = async (correo = "") => {
  //Verificar si el correo existe
  const emailExist = await Usuario.findOne({ correo });
  if (emailExist) {
    throw new Error(`El correo: ${correo}, ya esta registrado`);
  }
};

module.exports = {
  validRole,
  emailExist,
};
