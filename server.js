const express = require('express');
const app = express.Router();
const cors = require('cors');

express().use(cors());
const server = app.get('/api', (req, res) => {
 res.status(200).json({
	 message: 'tudo ok na rota: /api'
 })
});

module.exports = server;