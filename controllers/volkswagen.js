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

// List of all Costumes 
exports.volkswagen_list = async function(req, res) { 
    try{ 
        theCostumes = await volkswagen.find(); 
        res.send(theCostumes); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.volkswagen_view_all_Page = async function(req, res) { 
    try{ 
        theCostumes = await volkswagen.find(); 
        res.render('volkswagen', { title: 'volkswagen Search Results', results: theCostumes }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// Handle Costume create on POST. 
exports.costume_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new volkswagen(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.cost = req.body.cost; 
    document.varient = req.body.varient; 
    document.user = req.body.user; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 