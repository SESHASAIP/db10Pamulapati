var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var volkswagen_controller = require('../controllers/volkswagen'); 

 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// volkswagen ROUTES /// 
 
// POST request for creating a volkswagen.  
router.post('/volkswagen', volkswagen_controller.volkswagen_create_post); 
 
// DELETE request to delete volkswagen. 
router.delete('/volkswagen/:id', volkswagen_controller.volkswagen_delete); 
 
// PUT request to update volkswagen. 
router.put('/volkswagen/:id', volkswagen_controller.volkswagen_update_put); 
 
// GET request for one volkswagen. 
router.get('/volkswagen/:id', volkswagen_controller.volkswagen_detail); 
 
/* GET create volkswagen page */
router.get('/create',  volkswagen_controller.volkswagen_create_Page);

// GET request for list of all volkswagen items. 
router.get('/volkswagen', volkswagen_controller.volkswagen_list); 

/* GET detail volkswagen page */ 
router.get('/detail', volkswagen_controller.volkswagen_view_one_Page);

/* GET create update page */ 
router.get('/update', volkswagen_controller.volkswagen_update_Page);
/* GET create volkswagen page */
router.get('/delete', volkswagen_controller.volkswagen_delete_Page);

module.exports = router; 
 
 