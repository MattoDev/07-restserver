const { response, request } = require("express");
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
  const body = req.body;
  const usuario = new Usuario(body); //Creacion de la instancia
  await usuario.save(); //grabar el registro
  res.json({
    msg: "post API - controlador",
    usuario,
  });
};

const putUsers = (req, res = response) => {
  const { id } = req.params;
  res.json({
    msg: "put API - controlador",
    id,
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
