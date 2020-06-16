import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  InputBase,
  IconButton,
  TablePagination,
} from "@material-ui/core";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";

function App() {
  const [users, setUsers] = useState([]);

  const [order, setOrder] = React.useState("asc");

  const [searchInput, setSearchInput] = useState("");

  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [pageNumber, setPage] = React.useState(0);

  const [commonCountOfRows, setCommonCountOfRows] = React.useState(0);

  const handleRequestSort = (event) => {
    const isAsc = order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    getList(pageNumber);
    //sortArray(order);
  };

  const sortArray = async (order) => {
    /* var result = await axios.get(
      `/api/get_sorted_list?order=${order}&page=${pageNumber}&count=${rowsPerPage}&filter=${searchInput.toLowerCase()}`
    );
    setUsers(result.data.data);*/
  };

  const handleChangeSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const filterUsers = async (e) => {
    getList(pageNumber);
  };

  const getList = async (page) => {
    var result = await axios.get(
      `/api/get_list?filter=${searchInput.toLowerCase()}&page=${page}&count=${rowsPerPage}&order=${order}`
    );

    setUsers(result.data.data);
    setCommonCountOfRows(result.data.list_count);
    //console.log(result.data);
    //return result.data;
    // var data = await result.data.data.json();
    //  return data;
    // return result.data.data.json();
    //setUsers(result.data.data);
    //setCommonCountOfRows(result.data.list_count);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    getList(newPage);
    //setUsers(getList(newPage));
    //setCommonCountOfRows(users.length);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    setUsers([]);
  };

  useEffect(() => {
    //getList();
    if (users.length === 0) {
      let qqq = getList(0);
      // console.log(qqq);
      //setUsers(qqq.data);
      //setCommonCountOfRows(qqq.list_count);
      // setUsers(qqq.data);
    } //setUsers(getList(pag));
    // setCommonCountOfRows(users.length);
    //setUsers(getList(pageNumber)); //getList();
  }, []);

  return (
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
  );
}

export default App;
