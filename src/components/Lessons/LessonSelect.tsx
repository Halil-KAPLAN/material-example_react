import React, { useState } from "react";
import { Box, FormLabel, MenuItem, TextField } from "@mui/material";

const LessonSelect = () => {
  const [value, setValue] = useState("");
  return (
    <Box width="150px">
      <TextField
        select
        label="Select a country"
        fullWidth
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
        }}
      >
        <MenuItem value="tr">Türkiye</MenuItem>
        <MenuItem value="us">USA</MenuItem>
        <MenuItem value="ru">Russia</MenuItem>
      </TextField>
      <FormLabel>Value: {value}</FormLabel>
    </Box>
  );
};

export default LessonSelect;
