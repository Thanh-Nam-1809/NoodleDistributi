var express = require("express");
var router = express.Router();

const userController = require("../src/component/user/controller");
const upload = require("../src/middle/upload");

router.get("/", async function (req, res, next) {
  const users = await userController.getAll();
  console.log(users);
  res.render("user", { users: users });
});

router.get("/addUser", async function (req, res, next) {
  res.render("userInsert");
});

router.post("/", [upload.single("image")], async function (req, res, next) {
  let { body, file } = req;
  let image = "";
  if (file) {
    image = `http://192.168.12.134:3000/images/${file.filename}`;
    const noodles = [true, true, true];
    body = { ...body, noodles, role: 3, image };
  }
  await userController.insert(body);
  res.redirect("/user");
});

router.get("/:id/detail", async function (req, res, next) {
  const { id } = req.params;
  const user = await userController.getById(id);
  res.render("userDetail", { user });
});

router.post(
  "/:id/edit",
  [upload.single("image")],
  async function (req, res, next) {
    let { body, file, params } = req;
    delete body.image;
    if (file) {
      let image = `http://192.168.12.134:3000/images/${file.filename}`;
      body = { ...body, image };
    }
    await userController.update(params.id, body);
    res.redirect("/user");
  }
);

module.exports = router;
