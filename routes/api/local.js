const axios = require("axios");
const router = require("express").Router();
var geocoding = new require('reverse-geocoding-google');

var key ="AIzaSyCW-k8IgEVhb7dBDhlguI6pbmXVT2UEFMQ"

router.post("/", (req, res) => {
  console.log("local")
  var config = {
    'latitude': req.body.lat,
    'longitude': req.body.lng,
    'key': key
  };
  geocoding.location(config, function (err, data){
    if(err){
        console.log(err);
    }
    else{
        var state = data.results[0].address_components[4].short_name
        axios
    .get("https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries?$filter=declarationDate%20ge%20%272018-01-01T04:00:00.000z%27%20and%20state%20eq%20%27CA%27")
    .then(response => res.json(response.data))
    .catch(err => res.status(422).json(err));
    }
  });
  
});

module.exports = router;