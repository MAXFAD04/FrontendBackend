const express = require('express');
 
const PORT = process.env.PORT || 3010;
const app = express();
 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});


// api endpoints
const todoItems = require('./todo-items.json');
app.get('/api/todo-items', (req, res) => {
  res.json({ data: todoItems });
});


// starting server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});