import { Alert, AlertTitle, Stack } from "@mui/material";

const LessonAlert = () => {
  return (
    <Stack spacing={2} sx={{ width: 500, margin: "auto" }}>
      <Alert>Success</Alert>
      <Alert severity="error">Error</Alert>
      <Alert severity="warning">Warning</Alert>
      <Alert severity="info">Information</Alert>

      <Alert>
        <AlertTitle>Success</AlertTitle>
        Save successful
      </Alert>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Unexpected error occurred!
      </Alert>
    </Stack>
  );
};

export default LessonAlert;
