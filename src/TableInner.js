import React, { useState, useEffect } from "react";
import "./TableInner.css";
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
import SearchIcon from "@material-ui/icons/Search";

export const TableInner = ({
  order,
  handleRequestSort,
  searchInput,
  handleChangeSearchInput,
  filterData,
  datalist,
  rowsPerPage,
  commonCountOfRows,
  pageNumber,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <>
      <Paper className="tableContainer">
        <TableContainer>
          <TableSortLabel
            active={true}
            direction={order}
            onClick={handleRequestSort}
            className="button-for-mobile"
          >
            Сортировать по номеру
          </TableSortLabel>
          <InputBase
            placeholder="Фильтр по имени или по значению"
            inputProps={{ "aria-label": "search google maps" }}
            value={searchInput}
            onChange={handleChangeSearchInput}
            className="filterInput"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                filterData();
                // write your functionality here
              }
            }}
          />
          <IconButton aria-label="search" onClick={filterData}>
            <SearchIcon />
          </IconButton>
          <Table aria-label="simple table" className="tableInner">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={true}
                    direction={order}
                    onClick={handleRequestSort}
                  >
                    №
                  </TableSortLabel>
                </TableCell>
                <TableCell>Имя</TableCell>
                <TableCell>Значение</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datalist.map((row) => (
                <TableRow component="tr" key={row.id}>
                  <TableCell aria-label="Номер">{row.id}</TableCell>
                  <TableCell aria-label="Имя">{row.name}</TableCell>
                  <TableCell aria-label="Значение">{row.value}</TableCell>
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
};
