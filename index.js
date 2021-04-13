require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mainRouter = require('./app/routes/main.route');

app.use([cors()]);
app.use(mainRouter);

const port = process.env.PORT || 2000;

app.listen(port, () => `Server listening on port ${port}`);