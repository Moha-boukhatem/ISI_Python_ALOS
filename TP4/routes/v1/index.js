var express = require('express');
var joi = require('joi');
const app = require('../../app.js');
var router = express.Router();
var router = express.Router();
var organizer = require("./added_db.json");
var organizers = require("./db.json");


//directery = __dirname.replace('/routes/v1', '')


/* GET home page. */

router.get('', function(req, res, next) {
  res.render("home",{data:organizers});
  
});


/* GET All data. */
/* /v1/api/organizer*/
router.get('/api/organizers', function(req, res, next) {
  //res.json(organizers);
  res.render("users",{data:organizers});
});


/* GET Organizer by ID. */

router.get("/api/organizers/:id",(req,res,next) => {
    
  data = organizers.find((organizer)=>{
    return req.params.id == organizer.id
})
  if (!data) res.render("home",{data:"The Organizer ID was not Found"});
  res.render("user",{data:data});
    
})


/* GET All collection Ads of a specified Organizer. */

router.get("/api/organizers/:id/collections",(req,res,next) => {
    
  var data = organizers.find((organizer)=>{
    return req.params.id == organizer.id
  })
  res.json(data.dons)
    
})


/* GET one collection Ad of a specified Organizer. */

router.get("/api/organizers/:id/collections/:idAds",(req,res,next) => {
    
  var organizer = organizers.find((organizer)=>{
    return req.params.id == organizer.id })

  var don = organizer.dons.find((don)=>{
    return req.params.idAds == don.id })

  if (!don) res.render("home",{data:"The Collection Ad ID was not Found"});
  res.render("donors",{data:don});
  
})


/* GET All collection Ad donors  . */

router.get("/api/organizers/:id/collections/:idAds/donors",(req,res,next) => {
    
  var organizer = organizers.find((organizer)=>{
    return req.params.id == organizer.id })

  var don = organizer.dons.find((don)=>{
    return req.params.idAds == don.id })

res.json(don.donors)
  
})


/* GET one donor of a specified collection ad. */

router.get("/api/organizers/:id/collection/:idAds/donors/:idd",(req,res,next) => {
    
  var organizer = organizers.find((organizer)=>{
    return req.params.id == organizer.id })

  var don = organizer.dons.find((don)=>{
    return req.params.idAds == don.id })

  var donor = don.donors.find((donor)=>{
    return req.params.idd == donor.id })
  
  //if (!donor) res.render("home",{data:"The Donor ID was not Found"});
  res.json(donor)
  
})


/* POST New organizer */

router.post("/api/organizers",(req,res,next)=>{
  
  const schema = {
    organisateur : joi.string().required(),
    mail : joi.string().email().required(),
    ville : joi.string().required(),
    card_number : joi.string().min(12).required(),
    card_expire: joi.string.required(),
    security_code : joi.number().min(4).required()
  };

  const organizer={
    id : organizers.length + 1 ,
    organisateur : req.body.organisateur ,
    mail: req.body.mail,
    ville: req.body.ville,
    credit_card: [
      {
        card_number : req.body.card_number,
        card_expire: req.body.card_expire,
        security_code : req.body.security_code
      }
    ],
    dons: []
  }
  
  organizers.push(organizer)
  res.json(organizers)
})



/* Update organizer */

router.put("/api/organizers/:id",(req,res,next)=>{
  
  organizer = organizers.find((organizer)=>{
    return req.params.id == organizer.id
  })

  const schema = {
    organisateur : joi.string().required(),
    mail : joi.string().email().required(),
    mail : joi.string().required(),
    card_number : joi.string().min(12).required(),
    card_expire: joi.string.required(),
    security_code : joi.number().min(4).required()
  };

  organizer.organisateur =req.body.organisateur,
  organizer.mail =req.body.mail,
  organizer.ville =req.body.ville,
  organizer.card_number =req.body.card_number,
  organizer.card_expire =req.body.card_expire,
  organizer.security_code =req.body.security_code,
  
  res.json(organizers)
})


/* Delete organizer */

router.delete("/api/organizers/:id",(req,res,next)=>{
  
  organizer = organizers.find((organizer)=>{
    return req.params.id == organizer.id
  })
  organizers.splice(organizer.indexOf(organizer),1)
  res.json(organizers)
})














/* GET Error */

router.all("*",(req,res)=>{
  res.render("home",{data:"404 NOT FOUND"})
      
})


module.exports = router;
