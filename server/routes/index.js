var express = require("express");
var router = express.Router();

var updateUserInfoRouter = require("../controllers/tableController");

router.get("/api/get_list", updateUserInfoRouter.getAllUsers);
router.get("/api/get_sorted_list", updateUserInfoRouter.getAllUsersWithSorting);
//router.get("/api/get_filted_list", updateUserInfoRouter.getAllUsersWithFilter);

module.exports = router;
