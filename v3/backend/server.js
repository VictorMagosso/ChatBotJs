const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 8080;

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World')
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