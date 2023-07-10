import React from "react";
import { GetEmployeesResponseDto } from "../api/restApiExampleProxy";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white
  }
}))(TableCell);

type EmployeesTableProps = {
  data: GetEmployeesResponseDto[];
};

export const EmployeesTable = ({ data }: EmployeesTableProps) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <StyledTableCell>Name</StyledTableCell>
          <StyledTableCell align="right">Age</StyledTableCell>
          <StyledTableCell align="right">Salary</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.employee_name}
            </TableCell>
            <TableCell align="right">{row.employee_age}</TableCell>
            <TableCell align="right">
              {row.employee_salary.toLocaleString("de-de")}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
