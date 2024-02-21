import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { useState } from "react";

const LessonCheckbox = () => {
  const [terms, setTerms] = useState(false);
  const [abilities, setAbilities] = useState<string[]>([]);

  const handleAbilities = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = abilities.indexOf(e.target.value);
    setAbilities(
      index === -1
        ? [...abilities, e.target.value]
        : abilities.filter((abilitie) => abilitie !== e.target.value)
    );
  };

  return (
    <>
      <Box>
        <FormControl>
          <FormLabel>How's your PC?</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="Bad"
              control={<Checkbox color="error" />}
            />
            <FormControlLabel
              label="Average"
              control={<Checkbox color="info" />}
            />
            <FormControlLabel
              label="Good"
              control={<Checkbox color="primary" />}
            />
            <FormControlLabel
              label="Very good"
              control={<Checkbox color="secondary" />}
            />
            <FormControlLabel
              label="Perfect"
              control={<Checkbox color="warning" />}
            />
          </FormGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormGroup row>
            <FormControlLabel
              label="I agree to the terms of use."
              control={
                <Checkbox
                  color="warning"
                  checked={terms}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setTerms(e.target.checked)
                  }
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Abilities</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="React"
              value="react"
              control={
                <Checkbox
                  checked={abilities.includes("react")}
                  onChange={handleAbilities}
                />
              }
            />
            <FormControlLabel
              label="Angular"
              value="angular"
              control={
                <Checkbox
                  checked={abilities.includes("angular")}
                  onChange={handleAbilities}
                />
              }
            />
            <FormControlLabel
              label="Vue"
              value="vue"
              control={
                <Checkbox
                  checked={abilities.includes("vue")}
                  onChange={handleAbilities}
                />
              }
            />
          </FormGroup>
          <FormLabel>Selected: {abilities.join(", ")}</FormLabel>
        </FormControl>
      </Box>
    </>
  );
};

export default LessonCheckbox;
