import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateRange, DateRangePicker } from "@mui/x-date-pickers-pro";

const LessonDateRange = () => {
  const [dateValue, setDateValue] = useState<DateRange<Dayjs>>([null, null]);

  console.log(dateValue);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        label="Date"
        value={dateValue}
        onChange={(newDate) => setDateValue(newDate)}
      />
    </LocalizationProvider>
  );
};

export default LessonDateRange;
