const { response, request } = require("express");

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

const postUsers = (req, res = response) => {
  const { nombre, edad } = req.body;
  res.json({
    msg: "post API - controlador",
    nombre,
    edad,
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
