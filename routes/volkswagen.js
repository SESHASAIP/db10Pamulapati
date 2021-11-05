var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('volkswagen', { title: 'Search Results by volkswagen' });
});

module.exports = router;
