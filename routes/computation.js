var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function(req, res, next) {
  // Check if 'x' is provided as a query parameter, otherwise default to a random number
  let x = req.query.x ? parseFloat(req.query.x) : Math.random();
  let absResult = Math.abs(x); // Math.abs is safe for any x value
  let acosResult;

  // Math.acos is only defined for values between -1 and 1
  if (x >= -1 && x <= 1) {
    acosResult = Math.acos(x);
  } else {
    acosResult = "undefined (out of domain for Math.acos)";
  }

  // Send the result with both function applications
  res.send(`
    Math.abs applied to ${x} is ${absResult}<br>
    Math.acos applied to ${x} is ${acosResult}
  `);
});

module.exports = router;
