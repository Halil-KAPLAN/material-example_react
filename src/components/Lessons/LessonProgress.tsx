import { CircularProgress, LinearProgress, Stack } from "@mui/material";

const LessonProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color="error" disableShrink />
      <CircularProgress variant="determinate" value={50} />

      <LinearProgress />
      <LinearProgress color="error" />
      <LinearProgress color="secondary" />
      <LinearProgress variant="determinate" value={50} />
    </Stack>
  );
};

export default LessonProgress;
