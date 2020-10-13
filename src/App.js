import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { TableInner } from "./TableInner";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

function App() {
  const [datalist, setDatalist] = useState([]);

  const [order, setOrder] = React.useState("asc");

  const [searchInput, setSearchInput] = useState("");

  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [pageNumber, setPage] = React.useState(0);

  const [commonCountOfRows, setCommonCountOfRows] = React.useState(0);

  const [open, setOpen] = React.useState(false);

  const handleRequestSort = (event) => {
    const isAsc = order === "asc";
    let localOrder = isAsc ? "desc" : "asc";
    setOrder(localOrder);
    getList(pageNumber, localOrder, rowsPerPage);
  };

  const handleChangeSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const filterData = async (e) => {
    setPage(0);
    setOrder("asc");
    getList(0, order, rowsPerPage);
  };

  const getList = async (page, order, rowsPerPage) => {
    try {
      const result = await axios.get(
        `/api/get_list?filter=${searchInput.toLowerCase()}&page=${page}&count=${rowsPerPage}&order=${order}`
      );

      setDatalist(result.data.data);
      setCommonCountOfRows(result.data.list_count);
    } catch (error) {
      setOpen(true);
    }
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
    if (datalist.length === 0) {
      getList(pageNumber, order, rowsPerPage);
    }
  }, []);

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  return (
    <>
      <TableInner
        order={order}
        handleRequestSort={handleRequestSort}
        searchInput={searchInput}
        handleChangeSearchInput={handleChangeSearchInput}
        filterData={filterData}
        datalist={datalist}
        rowsPerPage={rowsPerPage}
        commonCountOfRows={commonCountOfRows}
        pageNumber={pageNumber}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Ошибка соединения с сервером"
      />
    </>
  );
}

export default App;
