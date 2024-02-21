import filmsData from "../helpers/filmData";
import { Autocomplete, TextField } from "@mui/material";

const LessonAutoComplete = () => {
  return (
    <Autocomplete
      options={filmsData}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Films" />}
    />
  );
};

export default LessonAutoComplete;
