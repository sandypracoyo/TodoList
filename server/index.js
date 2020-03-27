const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors')
const bodyParser = require('body-parser');
const taskRouter = require('./routes/Task');

dotenv.config({ path: '.env' });
const app = express();

app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//endpoint
app.use('/api', taskRouter);
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running on port : ${PORT}`));
