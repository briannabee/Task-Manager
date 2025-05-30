require('dotenv').config();
const express = require('express');
const taskRoutes = require('./routes/tasks');
const { verifyToken } = require('./auth/authMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => res.send('TODO API is running!'));


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});