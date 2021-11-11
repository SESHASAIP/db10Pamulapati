var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var costume_controller = require('../controllers/volkswagen'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/volkswagen', costume_controller.volkswagen_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/volkswagen/:id', costume_controller.volkswagen_delete); 
 
// PUT request to update Costume. 
router.put('/volkswagen/:id', 
costume_controller.costume_update_put); 
 
// GET request for one Costume. 
router.get('/volkswagen/:id', costume_controller.volkswagen_detail); 
 
// GET request for list of all Costume items. 
router.get('/volkswagen', costume_controller.volkswagen_list); 
 
module.exports = router; 
 
 