let users = [];

exports.getAll = () => {
  return users;
};

exports.create = (user) => {
  users.push(user);
};