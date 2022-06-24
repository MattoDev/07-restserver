const { response } = require("express");
const { subirArchivo } = require("../helpers");

const cargarArchivo = async (req, res = response) => {
  if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
    res.status(400).send({ msg: "No hay archivos que subir" });
    return;
  }

  try {
    //Imagenes , txt, md
    // const pathCompleto = await subirArchivo(req.files, ["txt", "md"], "textos");
    const pathCompleto = await subirArchivo(req.files, undefined, "imgs");

    res.json({
      nombre: pathCompleto,
    });
  } catch (msg) {
    res.status(400).json({ msg });
  }
};

module.exports = {
  cargarArchivo,
};
