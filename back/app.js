const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

// 中间件
app.use(express.json());
app.use('/api', apiRoutes);

// 启动服务器
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 