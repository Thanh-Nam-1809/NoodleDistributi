const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const userController = require("../src/component/user/controller");

router.get("/:id/login", async function (req, res, next) {
  const { id } = req.params;
  const user = await userController.getById(id);
  if (user) {
    const token = jwt.sign({ _id: user._id, username: user.fullName }, "mykey");
    return res
      .status(200)
      .json({ status: 200, error: false, data: { ...user._doc, token } });
  }
  res.status(200).json({ status: 200, error: true });
});

router.post("/updateNoodles", async function (req, res, next) {
  const { id, noodles } = req.body;
  const user = await userController.updateNoodles(id, noodles);
  res.status(200).json({ status: 200, error: false, data: user });
});

module.exports = router;
