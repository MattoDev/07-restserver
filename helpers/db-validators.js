const Role = require("../models/role");

const validRole = async (rol = "") => {
  const rolExist = await Role.findOne({ rol });
  if (!rolExist) {
    throw new Error(`El rol ${rol} no esta registrado en la BD`);
  }
};

module.exports = {
  validRole,
};
