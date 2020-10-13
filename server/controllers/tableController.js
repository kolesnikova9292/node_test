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

function getCategoryArray(req, res) {
  const arr = [
    { name: "category 1", id: 1 },
    { name: "category 2", id: 2 },
    { name: "category 3", id: 3 },
  ];
  return res.json({
    data: arr,
  });
}

function getProductsArray(req, res) {
  const arr = [
    { id: 1, name: "product 1", price: 100, category: 1 },
    { id: 2, name: "product 2", price: 200, category: 1 },
    { id: 3, name: "product 3", price: 300, category: 2 },
    { id: 4, name: "product 4", price: 400, category: 2 },
    { id: 5, name: "product 5", price: 500, category: 1 },
    { id: 6, name: "product 6", price: 600, category: 3 },
    { id: 7, name: "product 7", price: 700, category: 3 },
    { id: 8, name: "product 8", price: 800, category: 3 },
    { id: 9, name: "product 9", price: 900, category: 1 },
    { id: 10, name: "product 10", price: 1000, category: 1 },
  ];
  return res.json({
    data: arr,
  });
}

module.exports = {
  getAllData: getAllData,
  getCategoryArray: getCategoryArray,
  getProductsArray: getProductsArray
};
