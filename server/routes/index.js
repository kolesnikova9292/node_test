var express = require("express");
var router = express.Router();

var tableControllerRouter = require("../controllers/tableController");

router.get("/api/get_list", tableControllerRouter.getAllData);

router.get("/api/categories", tableControllerRouter.getCategoryArray);

router.get("/api/products", tableControllerRouter.getProductsArray);

router.get('/home', function (req, res, next) {
  res.redirect('/')
});

router.get('/products', function (req, res, next) {
  res.redirect('/')
});

router.get('/admin', function (req, res, next) {
  res.redirect('/')
});

module.exports = router;
