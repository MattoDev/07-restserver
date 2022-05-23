const { Schema, model } = require("mongoose");

const CustomerSchema = Schema({
  phone: {
    type: String,
    required: [true, "El numero es obligatorio"],
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  company: {
    type: String
  },
});

CustomerSchema.methods.toJSON = function () {
  const data  = this.toObject();

  return data;
};

module.exports = model("Customer", CustomerSchema);