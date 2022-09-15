const userModel = require("./model");

exports.login = async (fullName) => {
  return await userModel.findOne({ fullName, role: 1 });
};

exports.getAll = async () => {
  return await userModel.find({ role: 3 });
};

exports.insert = async (userObj) => {
  await userModel.create(userObj);
};

exports.getById = async (_id) => {
  return await userModel.findById({ _id });
};

exports.update = async (_id, body) => {
  await userModel.updateOne(
    { _id: _id },
    {
      $set: {
        fullName: body.fullName,
        department: body.department,
        birthday: body.birthday,
        gender: body.gender,
        img: body.img,
      },
    }
  );
};

exports.updateNoodles = async (_id, noodles) => {
  await userModel.updateOne(
    { _id: _id },
    {
      $set: {
        noodles: noodles,
      },
    }
  );
};
