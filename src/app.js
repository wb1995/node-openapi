const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

// 加载环境变量
dotenv.config();

// 创建Express应用实例
const app = express();

// 全局中间件配置
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 健康检查路由
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Express middleware server is running",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
});

// 引入路由
const userRoutes = require("./routes/userRoutes");

// API路由配置
const apiPrefix = process.env.API_PREFIX || "/api";
app.use(`${apiPrefix}/users`, userRoutes);

// 404处理中间件
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API端点2不存在",
    path: req.originalUrl,
  });
});

// 全局错误处理中间件
app.use((err, req, res, next) => {
  console.error("Global Error:", err.stack);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "服务器内部错误",
    environment: process.env.NODE_ENV,
  });
});

// 导出app实例
module.exports = app;
