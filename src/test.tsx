import { Container } from "@material-ui/core";
import React from "react";
import { AppHeader } from "./components/appHeader";
import { EmployeesTableWithFilter } from "./components/employeesTableWithFilter";

export default function Test(props: {}) {
  return (
    <>
      <AppHeader />
      <Container maxWidth="lg">
        <EmployeesTableWithFilter />
      </Container>
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
}
