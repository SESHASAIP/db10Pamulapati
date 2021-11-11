var volkswagen = require('../models/volkswagen'); 
 
// List of all Costumes 
exports.volkswagen_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: volkswagen list'); 
}; 
 
// for a specific Costume. 
exports.volkswagen_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: volkswagen detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.volkswagen_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: volkswagen create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.volkswagen_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: volkswagen delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.volkswagen_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: volkswagen update PUT' + req.params.id); 
}; 