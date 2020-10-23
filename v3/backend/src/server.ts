import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// const swaggerConfig = require('./middlewares/swagger');
const app = express();
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