const{ Router } = require('express');
const { times } = require('underscore');
const router = Router();
const _ = require('underscore');

const movies = require('../sample.json');

router.get('/',(req, res) => {
    return res.json(movies);
});

function enviar_notificacion_todos_usuarios(){
    console.log("Ejecutando tarea pesada")
}
router.post('/', (req, res) => {
    const { title, director, year, rating }= req.body; 
    if (title && director && year && rating) {
        const id = movies.length + 1; 
        const newMovie = {...req.body, id}; //objeto llamado new movie
        movies.push(newMovie);
        
        enviar_notificacion_todos_usuarios()

        return res.json(movies);
    } else {
        return res.status(500).json({error: 'There was an error.'});
    }
})

router.put('/:id', (req, res)=> {
    const {id} = req.params;
    const { title, director, year, rating }= req.body; 
    if (title && director && year && rating){
        _.each(movies,(movie,i) =>{
            if (movie.id ==id){
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating; 
            }
        })

        return res.json(movies);
    } else {
        return res.status(500).json({error: 'Todos los campos son requeridos.'});
    }
});

router.delete('/:id', (req, res) =>{
    const{  id} = req.params;
    _.each(movies,(movie, i) => {      //._each = empieza recorrer arreglo que le asigne, este caso "movies"
        if (movie.id == id) {            //por cada pelicula que recorro su id = al que recibo en '/:id' (lin.23)
            movies.splice(i,1);       //splice = remover (indice, cuantas quiero remover (1))
        }
    });
    return res.send(movies);
})
module.exports = router;
