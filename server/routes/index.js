var express = require("express");
var router = express.Router();

var tableControllerRouter = require("../controllers/tableController");

router.get("/api/get_list", tableControllerRouter.getAllData);

module.exports = router;
