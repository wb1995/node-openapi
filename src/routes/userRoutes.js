const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  chatUser,
} = require("../controllers/userController");

// 创建路由实例
const router = express.Router();

// 定义路由
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/chat", chatUser);

module.exports = router;
