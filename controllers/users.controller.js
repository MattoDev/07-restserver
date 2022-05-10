const { response } = require("express");

const getUsers = (req, res = response) => {
  res.json({
    msg: "get API - controlador",
  });
};

const postUsers = (req, res = response) => {
  res.json({
    msg: "post API - controlador",
  });
};

const putUsers = (req, res = response) => {
  res.json({
    msg: "put API - controlador",
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
