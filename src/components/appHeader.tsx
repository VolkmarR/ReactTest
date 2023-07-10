import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import React from "react";

export const AppHeader = () => (
  <Box mb={2}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">List of employees</Typography>
      </Toolbar>
    </AppBar>
  </Box>
);
