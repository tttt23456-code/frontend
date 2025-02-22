const express = require('express');
const router = express.Router();

// 示例API路由
router.get('/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

module.exports = router; 