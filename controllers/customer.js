const { response, request } = require("express");
const Customer = require("../models/customer")


const postCustomer = async (req, res = response) => {
    const { phone, email, company, } = req.body;
    const customer = new Customer({ phone, email, company, }); //Creacion de la instancia
  

    //Guardar en DB
    await customer.save(); //grabar el registro
    res.status(201).json({customer});
  };

  module.exports = {
    
    postCustomer,
  
  };
  