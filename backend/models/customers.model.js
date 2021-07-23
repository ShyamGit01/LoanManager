const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    dob: String,
    password: String,
});

const customerModel = mongoose.model("Customers", customerSchema);

module.exports = customerModel;