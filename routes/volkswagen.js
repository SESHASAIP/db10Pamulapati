var express = require('express'); 
const costume_controlers= require('../controllers/volkswagen'); 
var router = express.Router(); 
 
/* GET detail costume page */ 
router.get('/detail', costume_controlers.volkswagen_view_one_Page);
module.exports = router; 
