var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AstroPix' });
});


/* GET a picture from the APOD service */
router.get('/fetch_picture', function(req, res, next){
  if (req.query.today)
    res.send('To do: fetch today\'s picture');
  else if (req.query.random) {
    res.send('To do: fetch random picture');
  } else {
    next();  // Send to next route handler.
    // Since we haven't defined one, this will end up at the 404 error handler
  }

});


module.exports = router;
