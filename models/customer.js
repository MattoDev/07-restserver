const { Schema, model } = require("mongoose");

const CustomerSchema = Schema({
  phone: {
    type: String,
    required: [true, "El numero es obligatorio"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true,
  },
  company: {
    type: String
  },
});

CustomerSchema.methods.toJSON = function () {
  const { __v, _id, ...data } = this.toObject();

  return data;
};

module.exports = model("Customer", CustomerSchema);