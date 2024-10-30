var express = require('express');
var router = express.Router();

// Initialize value and total variables
let value = 0;
let total = 1;
/* GET users listing. */
router.get('/', function(req, res, next) {
  value += 2;          // Increment value by 2
  total += value;       // Add value to total
  res.send(`Total is: ${total}`); // Send response with updated total
});

module.exports = router;