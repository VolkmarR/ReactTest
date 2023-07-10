import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { debounce } from "lodash";
import { Box } from "@material-ui/core";

type TableFilterProps = {
  setFilterText: (text: string) => void;
};

const debounceValue = debounce(
  (value: string, set: (msg: string) => void) => set(value),
  250
);

export const TableFilter = ({ setFilterText }: TableFilterProps) => {
  const [value, setValue] = useState("");

  return (
    <Box marginBottom={1}>
      <TextField
        id="outlined-basic"
        label="Employee filter"
        variant="outlined"
        fullWidth
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value);
          debounceValue(event.target.value, setFilterText);
        }}
      />
    </Box>
  );
};
