const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.json([
        { 
            username:'test',
            email:'test@gmail'
        },
        { 
            username:'test2',
            email:'test2@gmail'
        }
    ])
});
module.exports = router;