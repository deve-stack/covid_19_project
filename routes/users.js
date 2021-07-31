var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
var express = require('express');
var router = express.Router();
let settings = { method: "Get" };

/* GET users listing. */
router.get('/covid', function(req, res, next) {
  let curl = "https://corona.lmao.ninja/v2/countries/India,Nepal,Bangladesh,Pakistan,Bhutan,SriLanka,maldives?yesterday";
  fetch(curl, settings).then(res => res.json()).then((data) => {
    res.render('countrywise', { world_data:data});
  });
});



module.exports = router;
