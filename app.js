const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`Express ${PORT}`);

});

// body parser
app.use(bodyParser.urlencoded({extended: false}));

//db connection
db
  .authenticate()
  .then(() => {
    console.log('Conectou com o banco')
  })
  .catch(err => {
    console.log('Erro ao conectar')
  })


//routes
app.get('/', (req, res) => {
    res.send("Funcionando")
}); 

//jobs routes

app.use('/jobs', require('./routes/jobs'));