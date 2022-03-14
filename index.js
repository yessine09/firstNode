const express = require('express');
const app = express();
const connectDB = require('./database/Connection')

connectDB();

app.use(express.json({ extended: false }));
app.use('/api/userModel', require('./Api/User'));
const Port = process.env.port || 3000;

app.listen(Port, () => console.log("Server started "));