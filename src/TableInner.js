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
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";

export const TableInner = ({
  order,
  handleRequestSort,
  searchInput,
  handleChangeSearchInput,
  filterUsers,
  users,
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
            placeholder="Фильтр по логину"
            inputProps={{ "aria-label": "search google maps" }}
            value={searchInput}
            onChange={handleChangeSearchInput}
          />
          <IconButton aria-label="search" onClick={filterUsers}>
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
              {users.map((row) => (
                <TableRow component="tr" key={row.id}>
                  <TableCell aria-label="Номер">{row.id}</TableCell>
                  <TableCell aria-label="Имя">{row.name}</TableCell>
                  <TableCell aria-label="Фамилия">{row.value}</TableCell>
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
