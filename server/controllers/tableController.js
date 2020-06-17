var dataArray = require("../data/index");

/*function getAllUsers(req, res) {
  var page = req.query.page;
  var count = req.query.count;
  return res.json({
    data: paginate(dataArray, count, page),
    list_count: dataArray.length,
  });
}

function getAllUsersWithSorting(req, res) {
  var order = req.query.order;
  var page = req.query.page;
  var count = req.query.count;

  let data = [];
  if (order == "asc") {
    data = paginate(dataArray, count, page).sort((a, b) =>
      a.id > b.id ? 1 : -1
    );
  }
  if (order == "desc") {
    data = paginate(dataArray, count, page).sort((a, b) =>
      a.id < b.id ? 1 : -1
    );
  }

  return res.json({
    data: data,
  });
}

function getAllUsersWithFilter(req, res) {
  var filter = req.query.filter;
  var page = req.query.page;
  var count = req.query.count;

  console.log(filter);

  let data = paginate(dataArray, count, page).filter(
    (x) =>
      x.name.toLowerCase().indexOf(filter) > -1 ||
      x.value.toLowerCase().indexOf(filter) > -1
  );

  console.log(data);

  return res.json({
    data: data,
  });
}*/

function paginate(array, page_size, page_number) {
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
}

function sortArray(array, order) {
  if (order === "asc") {
    return array.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  if (order === "desc") {
    return array.sort((a, b) => (a.id < b.id ? 1 : -1));
  }
}

function getAllUsers(req, res) {
  var filter = req.query.filter ? req.query.filter : "";
  var page = req.query.page ? req.query.page : 0;
  var count = req.query.count ? req.query.count : dataArray.length;
  var order = req.query.order ? req.query.order : "asc";

  console.log(order);

  console.log(filter);

  let data = paginate(dataArray, count, page).filter(
    (x) =>
      x.name.toLowerCase().indexOf(filter) > -1 ||
      x.value.toLowerCase().indexOf(filter) > -1
  );

  data = sortArray(data, order);
  //  .sort(order);

  console.log(data);

  return res.json({
    data: data,
    list_count: dataArray.length,
  });
}

function getAllUsersWithSorting(req, res) {
  var filter = req.query.filter ? req.query.filter : "";
  var page = req.query.page ? req.query.page : 0;
  var count = req.query.count ? req.query.count : dataArray.length;
  var order = req.query.order ? req.query.order : "asc";

  let symbolComparing = req.query.order === "asc" ? ">" : "<";

  let data = [];
  if (order === "asc") {
    data = paginate(dataArray, count, page)
      .filter(
        (x) =>
          x.name.toLowerCase().indexOf(filter) > -1 ||
          x.value.toLowerCase().indexOf(filter) > -1
      )
      .sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  if (order === "desc") {
    data = paginate(dataArray, count, page)
      .filter(
        (x) =>
          x.name.toLowerCase().indexOf(filter) > -1 ||
          x.value.toLowerCase().indexOf(filter) > -1
      )
      .sort((a, b) => (a.id < b.id ? 1 : -1));
  }

  return res.json({
    data: data,
  });
}

module.exports = {
  getAllUsers: getAllUsers,
  getAllUsersWithSorting: getAllUsersWithSorting,
  //getAllUsersWithFilter: getAllUsersWithFilter,
};
