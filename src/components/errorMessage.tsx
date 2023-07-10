import { Box } from "@material-ui/core";
import React from "react";

export const ErrorMessage = ({ msg, error }: { msg: string; error: any }) => {
  if (error) console.log(error);
  return (
    <Box mx="auto" color="error.main" textAlign="center">
      <h3>{msg}</h3>
    </Box>
  );
};
