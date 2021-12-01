var express = require('express');
const volkswagen_controlers= require('../controllers/volkswagen');
var router = express.Router();
const secured = (req, res, next) => {
  if (req.user){
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}
/* GET volkswagen */
router.get('/', volkswagen_controlers.volkswagen_view_all_Page );
/* GET detail volkswagen page */
router.get('/detail', volkswagen_controlers.volkswagen_view_one_Page);
/* GET create volkswagen page */
router.get('/create', secured, volkswagen_controlers.volkswagen_create_Page);
/* GET create update page */
// router.get('/update', volkswagen_controlers.volkswagen_update_Page);
/* GET update volkswagen page */
router.get('/update', secured, volkswagen_controlers.volkswagen_update_Page);
/* GET create volkswagen page */
router.get('/delete', secured, volkswagen_controlers.volkswagen_delete_Page);


module.exports = router;