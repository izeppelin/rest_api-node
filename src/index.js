const express = require('express');
const app = express();
const morgan = require('morgan'); //morgan = midleware, procesa datos antes de que nuestro servidor los reciba 
const cors = require('cors')
app.use(cors());
 

//SETTINGS -------   NPM RUN DEV - CORRO EL SERVER
app.set('port', process.env.PORT || 3000); //en caso de haber puerto def en la nube o mi sistema que lo tome caso contrario tome puerto 3k
app.set('json spaces', 2);

//MIDDLEWARE ----
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //entiende datos que llegan desde formularios.
app.use(express.json());//permite a mi app recibir formatos json y entenderlos 

//ROUTES --- RUTAS
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/users', require ('./routes/users'));

//STARTING SERVER -------- 
//una vez declarado la constante puede empezar mi app.
app.listen(app.get(`port`), () => { 
    console.log(`Server on port ${app.get('port')}`);

});

