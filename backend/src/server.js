const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/index');
const port = process.env.PORT || 3006;

require('dotenv').config();

const router = express.Router();

routes(app, router);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.listen(port, () => {
    console.log(`App running at ${port}`)
})