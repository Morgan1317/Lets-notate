const path = require('path');
const router = require('express').Router();

//  the '/' brings us to the root route of the server
// this get route has one job, to respond with an html page and display in browser.
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// wildcard route, incase req is made for route that doesn't exist
router.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, './public/index.html'));
});

module.exports = router; 