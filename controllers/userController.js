const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
  const users = User.getAll();
  res.render('userView', { users });
};

exports.createUser = (req, res) => {
  const newUser = req.body;
  User.create(newUser);
  res.redirect('/users');
};