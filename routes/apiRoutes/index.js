const router = require('express').Router();
const noteRoutes = require('../apiRoutes/noteRoutes');

// api route to use notesRoutes page
router.use(noteRoutes);


module.exports = router; 