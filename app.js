const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));
