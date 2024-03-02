import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Stack } from "@mui/material";
import { Dayjs } from "dayjs";
import { useState } from "react";
import { TimePicker } from "@mui/x-date-pickers";

const LessonDateAndTimePicker = () => {
  const [dateValue, setDateValue] = useState<Dayjs | null | undefined>(null);

  return (
    <Stack spacing={2} direction="row">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={2}>
          <DatePicker
            label="Date"
            value={dateValue}
            onChange={(newDate) => setDateValue(newDate)}
          />
          <TimePicker
            label="Time"
            value={dateValue}
            onChange={(newDate) => setDateValue(newDate)}
          />
        </Stack>
      </LocalizationProvider>
    </Stack>
  );
};

export default LessonDateAndTimePicker;
