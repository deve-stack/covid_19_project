var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
const fetch = require('node-fetch');
let settings = { method: "Get" };
var title='Covid-19 Tracker';


router.get('/country/:country', function(req, res, next) {
  var country=req.params.country;
  let countrytotal="https://coronavirus-19-api.herokuapp.com/countries/"+country;
  if(country=="USA")
  {
    country="US";
  }
  fetch(countrytotal, settings).then(res => res.json()).then((totaldata) => {
    res.render('country', { title: title,countrytotal:totaldata,country:country,useremail:req.session.user });
  });
});


/* GET country  listing. */
router.get('/', function(req, res, next) {
  let curl = "https://corona.lmao.ninja/v2/countries/India,Nepal,Bangladesh,Pakistan,Bhutan,SriLanka,maldives?yesterday";
  fetch(curl, settings).then(res => res.json()).then((data) => {
    res.render('countrywise', { world_data:data});
  });
});




module.exports = router;
