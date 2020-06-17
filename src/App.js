import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { TableInner } from "./TableInner";

function App() {
  const [users, setUsers] = useState([]);

  const [order, setOrder] = React.useState("asc");

  const [searchInput, setSearchInput] = useState("");

  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [pageNumber, setPage] = React.useState(0);

  const [commonCountOfRows, setCommonCountOfRows] = React.useState(0);

  const handleRequestSort = (event) => {
    const isAsc = order === "asc";
    let localOrder = isAsc ? "desc" : "asc";
    setOrder(localOrder);
    getList(pageNumber, localOrder, rowsPerPage);
  };

  const handleChangeSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const filterUsers = async (e) => {
    getList(pageNumber, order, rowsPerPage);
  };

  const getList = async (page, order, rowsPerPage) => {
    var result = await axios.get(
      `/api/get_list?filter=${searchInput.toLowerCase()}&page=${page}&count=${rowsPerPage}&order=${order}`
    );

    setUsers(result.data.data);
    setCommonCountOfRows(result.data.list_count);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    getList(newPage, order, rowsPerPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    getList(pageNumber, order, parseInt(event.target.value, 10));
  };

  useEffect(() => {
    if (users.length === 0) {
      getList(pageNumber, order, rowsPerPage);
    }
  }, []);

  return (
    <>
      <TableInner
        order={order}
        handleRequestSort={handleRequestSort}
        searchInput={searchInput}
        handleChangeSearchInput={handleChangeSearchInput}
        filterUsers={filterUsers}
        users={users}
        rowsPerPage={rowsPerPage}
        commonCountOfRows={commonCountOfRows}
        pageNumber={pageNumber}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );

  /* return (
    <>
      <Paper>
        <TableContainer className="tableConteiner">
          <TableSortLabel
            active={true}
            direction={order}
            onClick={handleRequestSort}
            className="button-for-mobile"
          >
            Сортировать по номеру
          </TableSortLabel>
          <InputBase
            placeholder="Фильтр по логину"
            inputProps={{ "aria-label": "search google maps" }}
            value={searchInput}
            onChange={handleChangeSearchInput}
          />
          <IconButton aria-label="search" onClick={filterUsers}>
            <SearchIcon />
          </IconButton>
          <Table className="tableInner" aria-label="simple table">
            <TableHead className="table-head">
              <TableRow>
                <TableCell className="cell_header">
                  <TableSortLabel
                    active={true}
                    direction={order}
                    onClick={handleRequestSort}
                  >
                    №
                  </TableSortLabel>
                </TableCell>
                <TableCell className="cell_header">Имя</TableCell>
                <TableCell className="cell_header">Значение</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row) => (
                <TableRow component="tr" key={row.id}>
                  <TableCell className="cell" aria-label="Номер">
                    {row.id}
                  </TableCell>
                  <TableCell className="cell" aria-label="Имя">
                    {row.name}
                  </TableCell>
                  <TableCell className="cell" aria-label="Фамилия">
                    {row.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            rowsPerPage={rowsPerPage}
            count={commonCountOfRows}
            page={pageNumber}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Paper>
    </>
  );*/
}

export default App;
