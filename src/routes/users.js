const {Router, response} = require('express');
const router = Router();
const fetch = require ('node-fetch');


router.get ('/', async (req, res) =>{ //metodo async-await: decirle que este fetch va a tomar tiempo, entonces que espere (await).
    const response = await  fetch('https://jsonplaceholder.typicode.com/users');  //fetch usa peticiones get, put post, del. a otros servcios. 
    const users = await  response.json();
    return res.json(users);

});




module.exports = router;