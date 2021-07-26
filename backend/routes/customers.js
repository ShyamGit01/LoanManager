var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const customerModel = require("../models/customers.model");

/* GET customer */
router.get("/", async (req, res, next) => {
  try {
    const customers = await customerModel.find();
    // res.send(customers);
    res.status(200).json({
      status: 0,
      message: "Data Fetch Successfully",
      results: customers,
    });
  } catch (error) {
    res.status(400).json({
      status: 1,
      message: error,
    });
  }
});

/* create customer */
router.post("/add", async (req, res, next) => {
  // check emai exixt in db or not
  const emailExist = await customerModel.findOne({
    email: req.body.email,
  });
  if (emailExist) {
    return res.status(400).json({
      status: 1,
      message: "Email Already exists..",
    });
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const customer = new customerModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    password: hashedPassword,
    dob: req.body.dob,
    R_address: req.body.R_address,
    R_city: req.body.R_city,
    R_state: req.body.R_state,
    R_pin: req.body.R_pin,
    P_address: req.body.P_address,
    P_city: req.body.P_city,
    P_state: req.body.P_state,
    P_pin: req.body.P_pin,
  });

  try {
    const savedCustomer = await customer.save();
    res.status(200).json({
      status: 1,
      message: "Registration Success..",
      data: savedCustomer,
    });
  } catch (error) {
    res.status(400).json({
      status: 1,
      message: error,
    });
  }
});

/* Edit customer */
router.put("/update/:customerId", async (req, res, next) => {
  try {
    const customer = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      dob: req.body.dob,
      R_address: req.body.R_address,
    R_city: req.body.R_city,
    R_state: req.body.R_state,
    R_pin: req.body.R_pin,
    P_address: req.body.P_address,
    P_city: req.body.P_city,
    P_state: req.body.P_state,
    P_pin: req.body.P_pin,
    };

    const updatedCustomer = await customerModel.findByIdAndUpdate(
      { _id: req.params.customerId },
      customer
    );
    res.status(200).json({
      status: 0,
      message: "Data Updated Successfully",
      data: {
        old_data: updatedCustomer,
        new_data: customer,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 1,
      message: error,
    });
  }
});

/* delete customer */
router.delete("/delete/:customerId", async (req, res, next) => {
  try {
    const deleteCustomer = await customerModel.findByIdAndDelete(
      req.params.customerId
    );
    // res.status(200).json({
    //     status : 0,
    //     message : "Data Deleted Successfully",
    //     data : removeListing
    // })
    res.status(200).send(deleteCustomer);
  } catch (error) {
    res.status(400).json({
      status: 1,
      message: error,
    });
  }
});

// view customer
router.get("/view/:customerId", async (req, res, next) => {
  try {
    const viewCustomer = await customerModel.findById(req.params.customerId);
    res.status(200).json({
      status: 0,
      message: "Data Viewed Successfully",
      results: viewCustomer,
    });
  } catch (error) {
    res.status(400).json({
      status: 1,
      message: error,
    });
  }
});

/* search customer */
router.post("/search", function (req, res, next) {
  res.send("customer");
});

module.exports = router;
