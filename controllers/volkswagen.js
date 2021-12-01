var volkswagen = require('../models/volkswagen'); 
 
// List of all volkswagens 
exports.volkswagen_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: volkswagen list'); 
}; 
 
// for a specific volkswagen. 
exports.volkswagen_detail = async function(req, res) { 
    //exports.volkswagen_detail = async function(req, res) { 
        console.log("detail"  + req.params.id) 
        try{
            result = await volkswagen.findById( req.params.id) 
            res.send(result)
        }catch(error)
        {
            res.status(500) 
            res.send(`{"error": document for id ${req.params.id} not found`);
        }
   // res.send('NOT IMPLEMENTED: volkswagen detail: ' + req.params.id); 
}; 
 
// Handle volkswagen create on POST. 
exports.volkswagen_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: volkswagen create POST'); 
}; 
 
// Handle volkswagen delete form on DELETE. 
//exports.volkswagen_delete = function(req, res) { 
  // res.send('NOT IMPLEMENTED: volkswagen delete DELETE ' + req.params.id); 
//}; 
// Handle volkswagen delete on DELETE. 
exports.volkswagen_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await volkswagen.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle volkswagen update form on PUT. 

exports.volkswagen_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await volkswagen.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.cost)  
               toUpdate.cost = req.body.cost; 
        if(req.body.varient)
               toUpdate.varient = req.body.varient; 
        if(req.body.user) 
               toUpdate.user = req.body.user; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
}; 

// List of all volkswagens 
exports.volkswagen_list = async function(req, res) { 
    try{ 
        thevolkswagens = await volkswagen.find(); 
        res.send(thevolkswagens); 
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
        thevolkswagens = await volkswagen.find(); 
        res.render('volkswagen', { title: 'volkswagen Search Results', results: thevolkswagens }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// Handle volkswagen create on POST. 
exports.volkswagen_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new volkswagen(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"volkswagen_type":"goat", "cost":12, "size":"large"} 
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
// Handle a show one view with id specified by query 
exports.volkswagen_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await volkswagen.findById( req.query.id) 
        res.render('volkswagendetail',  
        { title: 'volkswagen Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a volkswagen.
// No body, no in path parameter, no query.
// Does not need to be async


// Handle building the view for updating a volkswagen. 
// query provides the id 
exports.volkswagen_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await volkswagen.findById(req.query.id) 
        res.render('volkswagenupdate', { title: 'volkswagen Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a volkswagen. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.volkswagen_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('volkswagencreate', { title: 'volkswagen Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
//Handle building the view for updating a volkswagen. 
// query provides the id 
exports.volkswagen_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await volkswagen.findById(req.query.id) 
        res.render('volkswagenupdate', { title: 'volkswagen Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query
exports.volkswagen_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await volkswagen.findById(req.query.id)
    res.render('volkswagendelete', { title: 'volkswagen Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };