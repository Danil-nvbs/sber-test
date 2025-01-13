const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router.js');
const cors = require('cors')

require('dotenv').config();

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true, parameterLimit: 50000 }));
app.use(cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
}))
app.use('/', router);

const port = 3001;
app.listen(port, () => {
    console.log(`Server started: http://localhost:${port}`);
});