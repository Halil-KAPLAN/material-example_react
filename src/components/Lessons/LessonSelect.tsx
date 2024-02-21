import React, { useState } from "react";
import { Box, FormLabel, MenuItem, Stack, TextField } from "@mui/material";

const LessonSelect = () => {
  const [value, setValue] = useState("");
  const [multiValue, setMultiValue] = useState<string[]>([]);
  return (
    <Stack direction="row" spacing={2}>
      <Box width="150px">
        <FormLabel>Single select</FormLabel>
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

      <Box width="150px">
        <FormLabel>Multi select</FormLabel>
        <TextField
          select
          SelectProps={{
            multiple: true,
          }}
          label="Select a country"
          fullWidth
          value={multiValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setMultiValue(
              typeof e.target.value === "string"
                ? e.target.value.split(",")
                : e.target.value
            );
          }}
        >
          <MenuItem value="tr">Türkiye</MenuItem>
          <MenuItem value="us">USA</MenuItem>
          <MenuItem value="ru">Russia</MenuItem>
        </TextField>
        <FormLabel>Multi value: {multiValue.join(", ")}</FormLabel>
      </Box>
    </Stack>
  );
};

export default LessonSelect;
