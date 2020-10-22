const express = require('express');
// const swaggerConfig = require('./middlewares/swagger');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
// app.use(...swaggerConfig);

app.get('/', (req, res) => {
    res.send('server Running')
});

app.get('/', (req, res) => {
    req.url
})

app.post('/salvo', (req, res) => {
    console.log(req.body)
});

app.listen(PORT, () => {console.log(
    `app listen on port ${PORT}`
)})