const express = require('express');
const dotenv = require('dotenv');
const colors = require('express');
const morgan = require('express');
const connectDB = require('./config/db');

dotenv.config({path: './config/config.env' });

connectDB();

const logs = require('./routes/api/logs');

const app = express(); 

app.use(express.json());
app.use('/api/v1/logs', logs);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode at http://localhost:${PORT}`))