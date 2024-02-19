import React, { FormEvent, useState } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const LessonRadio = () => {
  const [value, setValue] = useState("");
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch (value) {
      case "yes":
        setError(false);
        setHelperText("Yeeeaa");
        break;
      case "no":
        setError(true);
        setHelperText("Nope");
        break;
      default:
        setHelperText("Please select a value!");
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Is training really useful?</FormLabel>
        <RadioGroup
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        >
          <FormControlLabel value="yes" label="Yes" control={<Radio />} />
          <FormControlLabel value="no" label="No" control={<Radio />} />
        </RadioGroup>
        <Button type="submit" variant="outlined">
          Go
        </Button>
        <FormHelperText error={error}>{helperText}</FormHelperText>
      </FormControl>
    </form>
  );
};

export default LessonRadio;
