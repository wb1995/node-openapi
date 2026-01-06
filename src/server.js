const app = require('./app');

// 从环境变量获取端口，默认3000
const PORT = process.env.PORT || 3000;

// 启动服务器
const server = app.listen(PORT, () => {
  console.log(`\n🚀 Express Middleware Server Started`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔍 Health Check: http://localhost:${PORT}/health`);
  console.log(`📚 API Prefix: ${process.env.API_PREFIX || '/api'}`);
  console.log(`\nPress Ctrl+C to stop the server\n`);
});

// 优雅关闭处理
process.on('SIGINT', () => {
  console.log('\n📌 Server is shutting down...');
  server.close(() => {
    console.log('✅ Server has been shut down\n');
    process.exit(0);
  });
});
