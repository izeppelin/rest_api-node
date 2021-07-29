const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Dylan",
        "website" : "dfacuyweb.com"
    };
    res.json(data); 
});

module.exports = router;
