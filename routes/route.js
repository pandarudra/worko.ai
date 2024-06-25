const express = require("express");
const router = express.Router();
const {
  createuser,
  getuser,
  getuserbyid,
  updateuser,
  patchuser,
  deleteuser,
} = require("../controllers/userController");
router.post("/createuser", createuser);
router.get("/user", getuser);
router.get("/user/:id", getuserbyid);
router.put("/user/:id", updateuser);
router.patch("/user/:id", patchuser);
router.delete("/user/:id", deleteuser);

module.exports = router;
