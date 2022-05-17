const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuario");

const getUsers = async (req = request, res = response) => {
  // const { q, nombre = "no name", apikey, page = 10, limit } = req.query;
  const { limit = 5, desde = 0 } = req.query;
  const query = { estado: true };

  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments(query),
    Usuario.find(query).skip(Number(desde)).limit(Number(limit)),
  ]);

  res.json({
    total,
    usuarios,
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
  const { _id, password, google, correo, ...resto } = req.body;
  //TODO validar contra base de datos
  if (password) {
    //Encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }
  const usuario = await Usuario.findByIdAndUpdate(id, resto);
  res.json({
    usuario,
  });
};
const deleteUsers = async (req, res = response) => {
  const { id } = req.params;
  const uid = req.uid;
  //Fisicamente lo borramos
  // const usuario = await Usuario.findByIdAndDelete(id);

  //Como se debe hacer el borrado
  const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });

  res.json({
    usuario,
    uid,
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
