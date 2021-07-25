const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  dob: String,
  R_address: String,
  R_city: String,
  R_state: String,
  R_pin: String,
  P_address: String,
  P_city: String,
  P_state: String,
  P_pin: String,
  password: String,
});

const customerModel = mongoose.model("Customers", customerSchema);

module.exports = customerModel;
