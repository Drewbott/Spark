const axios = require("axios");
const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("hit")
  axios
    .get("https://api.reliefweb.int/v1/disasters?appname=rwint-user-0&profile=list&preset=latest&limit=10")
    .then(response => res.json(response.data))
    .catch(err => res.status(422).json(err));
});

module.exports = router;