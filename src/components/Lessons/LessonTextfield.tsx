import { InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";

const LessonTextfield = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />

        <TextField
          label="Name"
          variant="outlined"
          size="small"
          color="error"
          helperText="Enter your name"
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Pass" type="password" />

        <TextField
          label="Pass"
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helperText={!value && "Please enter a password"}
        />

        <TextField label="Disable" disabled />
        <TextField label="readOnly" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Price"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">TL</InputAdornment>
            ),
          }}
        />

        <TextField
          label="Price"
          variant="outlined"
          InputProps={{
            endAdornment: <InputAdornment position="start">TL</InputAdornment>,
          }}
        />
      </Stack>

      <Stack direction="row" spacing={2}></Stack>
    </Stack>
  );
};

export default LessonTextfield;
