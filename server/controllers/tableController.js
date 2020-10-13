var dataArray = require("../data/index");

function paginate(array, page_size, page_number) {
  page_size = parseInt(page_size);
  page_number = parseInt(page_number);

  return array.length > page_size
    ? array.slice(page_number * page_size, (page_number + 1) * page_size)
    : array;
}

function sortArray(array, order) {
  if (order === "asc") {
    return array.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  if (order === "desc") {
    return array.sort((a, b) => (a.id < b.id ? 1 : -1));
  }
}

function getAllData(req, res) {
  const filter = req.query.filter ? req.query.filter : "";
  const page = req.query.page ? req.query.page : 0;
  const count = req.query.count ? req.query.count : dataArray.length;
  const order = req.query.order ? req.query.order : "asc";

  let data = dataArray.filter(
    (x) =>
      x.name.toLowerCase().indexOf(filter) > -1 ||
      x.value.toLowerCase().indexOf(filter) > -1
  );

  let dataWithPag = paginate(data, count, page);

  let dataWithSort = sortArray(dataWithPag, order);

  return res.json({
    data: dataWithSort,
    list_count: data.length,
  });
}

module.exports = {
  getAllData: getAllData,
};
