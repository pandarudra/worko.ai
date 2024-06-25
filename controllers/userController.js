const express = require("express");
const bcrypt = require("bcryptjs");
require("events").EventEmitter.defaultMaxListeners = 20;
const userModel = require("../models/model");
const { authSchemaid, authSchemaez } = require("../validaters/auth");

exports.createuser = (req, res) => {
  const { email, name, age, city, zip } = authSchemaez.validate(req.body);
  try {
    const user = new userModel({
      email,
      name,
      age,
      city,
      zip,
    });
    user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.getuser = async (req, res) => {
  try {
    const user = await userModel.find();

    user.forEach((user) => {
      res.status(200).json(user.name);
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.getuserbyid = async (req, res) => {
  const id = authSchemaid.validate(req.params.id);
  try {
    const user = await userModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.updateuser = async (req, res) => {
  const id = authSchemaid.validate(req.params.id);
  const { email, name, age, city, zip } = authSchemaez.validate(req.body);
  try {
    const user = await userModel.findByIdAndUpdate(
      id,
      { email, name, age, city, zip },
      { new: true }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.patchuser = async (req, res) => {
  const id = authSchemaid.validate(req.params.id);
  const { email, name, age, city, zip } = authSchemaez.validate(req.body);
  try {
    const user = await userModel.findByIdAndUpdate(
      id,
      { email, name, age, city, zip },
      { new: true }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.deleteuser = async (req, res) => {
  const id = authSchemaid.validate(req.params.id);
  try {
    const user = await userModel.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
