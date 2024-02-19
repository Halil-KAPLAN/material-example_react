import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";

const LessonRadioGroup = () => {
  const [value, setValue] = useState("");

  return (
    <FormControl>
      <FormLabel>Your salary expectation</FormLabel>
      <RadioGroup>
        <FormControlLabel label="$3000" value={3000} control={<Radio />} />
        <FormControlLabel label="$4000" value={4000} control={<Radio />} />
        <FormControlLabel label="$5000" value={5000} control={<Radio />} />
      </RadioGroup>

      <RadioGroup
        row
        name="extected-salary"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      >
        <FormControlLabel label="$3000" value={3000} control={<Radio />} />
        <FormControlLabel label="$4000" value={4000} control={<Radio />} />
        <FormControlLabel label="$5000" value={5000} control={<Radio />} />
      </RadioGroup>
      <FormHelperText>Selected Price: {value}</FormHelperText>
    </FormControl>
  );
};

export default LessonRadioGroup;
