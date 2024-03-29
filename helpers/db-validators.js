const { Categoria, Usuario, Producto } = require("../models");
const Role = require("../models/role");

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

const userExistById = async (id) => {
  //Verificar si el correo existe
  const userExist = await Usuario.findById(id);
  if (!userExist) {
    throw new Error(`El id: ${id}, no existe`);
  }
};

const existeCategoriaPorId = async (id) => {
  //Verificar si el correo existe
  const existeCategoria = await Categoria.findById(id);
  if (!existeCategoria) {
    throw new Error(`El id: ${id}, no existe`);
  }
};

const existeProductoPorId = async (id) => {
  //Verificar si el correo existe
  const existeProducto = await Producto.findById(id);
  if (!existeProducto) {
    throw new Error(`El id: ${id}, no existe`);
  }
};

module.exports = {
  validRole,
  emailExist,
  userExistById,
  existeCategoriaPorId,
  existeProductoPorId,
};
