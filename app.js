const express = require('express');
const apiTask = require('./api/routes/task');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/task', apiTask);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
