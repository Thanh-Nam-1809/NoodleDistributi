const userService = require("./service");
const brcyptjs = require("bcryptjs");

exports.login = async (fullname, password) => {
  try {
    const user = await userService.login(fullname);
    if (!user) return null;
    const checkPassword = await brcyptjs.compare(password, user.password);
    if (checkPassword) return user;
    return null;
  } catch (error) {
    return null;
  }
};

exports.getAll = async () => {
  try {
    return await userService.getAll();
  } catch (error) {
    return [];
  }
};

exports.insert = async (userObj) => {
  await userService.insert(userObj);
};

exports.getById = async (_id) => {
  try {
    return await userService.getById(_id);
  } catch (error) {
    return null;
  }
};

exports.update = async (_id, body) => {
  await userService.update(_id, body);
};

exports.updateNoodles = async (_id, noodles) => {
  await userService.updateNoodles(_id, noodles);
  return await userService.getById(_id);
};
