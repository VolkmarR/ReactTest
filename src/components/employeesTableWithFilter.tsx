import { Backdrop, CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import {
  GetEmployeesResponseDto,
  useGetEmployees
} from "../api/restApiExampleProxy";
import { EmployeesTable } from "./employeesTable";
import { ErrorMessage } from "./errorMessage";
import { TableFilter } from "./tableFilter";

function filterEmployees(
  employees: GetEmployeesResponseDto[],
  filterText: String
) {
  if (filterText === "" || employees === undefined) return employees;

  const lowerCaseFilterText = filterText.toLowerCase();
  return employees.filter((item) =>
    item.employee_name.toLowerCase().includes(lowerCaseFilterText)
  );
}

export const EmployeesTableWithFilter = () => {
  const [filterText, setFilterText] = useState("");
  const { employees, error, isLoading } = useGetEmployees();

  if (isLoading) {
    return (
      <Backdrop open>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }
  if (error) return <ErrorMessage msg="Something went wrong" error={error} />;

  return (
    <>
      <TableFilter setFilterText={setFilterText} />
      <EmployeesTable data={filterEmployees(employees, filterText)} />
    </>
  );
  //

  // TODO
  // - call sample api
  // GET API = https://dummy.restapiexample.com/api/v1/employees
  // - visualize the recived data
  // - create a search input field to filter the data on the employee_name field

  // Usefull links:
  // https://mui.com/material-ui/getting-started/overview/
};
