const express = require('express')
const hbs = require('hbs');
//Cargo variables de entorno
require('dotenv').config();

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico.
app.use(express.static('public'));



app.get('/', (req, res) => {
  res.render('home', {
    nombre: ' Rafael V.H.',
    titulo: 'Curso de Node - ',
    nombrePage: 'Trabajando con hbs en Node.'
  });
})

app.get('/generic', (req, res)  => {
    res.render('generic', {
        nombre: ' Rafael V.H.',
        titulo: 'Curso de Node - ',
        nombrePage: 'Trabajando con hbs en Node.'
    });
})

app.get('/elements', (req, res)  => {
    res.render('elements', {
        nombre: ' Rafael V.H.',
        titulo: 'Curso de Node - ',
        nombrePage: 'Trabajando con hbs en Node.'
    });
})

app.get('*', (req, res) => {
    res.render('404');
})

app.listen(port, () => {
    console.log(`Aplicacion corriendo en el puerto: ${port}`)
})