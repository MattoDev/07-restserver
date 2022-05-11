const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuario");

const getUsers = (req = request, res = response) => {
  const { q, nombre = "no name", apikey, page = 10, limit } = req.query;
  res.json({
    msg: "get API - controlador",
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const postUsers = async (req, res = response) => {
  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol }); //Creacion de la instancia

  //Encriptar contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);
  //Guardar en DB
  await usuario.save(); //grabar el registro
  res.json({
    usuario,
  });
};

const putUsers = async (req, res = response) => {
  const { id } = req.params;
  const { password, google, ...resto } = req.body;

  //TODO validar contra base de datos
  if (password) {
    //Encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const usuario = await Usuario.findByIdAndUpdate(id, resto);

  res.json({
    msg: "put API - controlador",
    usuario,
  });
};

const deleteUsers = (req, res = response) => {
  res.json({
    msg: "delete API - controlador",
  });
};

const pacthUsers = (req, res = response) => {
  res.json({
    msg: "patch API - controlador",
  });
};

module.exports = {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers,
  pacthUsers,
};
