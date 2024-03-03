import { Box, Stack } from "@mui/material";

const LessonThemeCustomization = () => {
  return (
    <Stack spacing={2} direction="row">
      <Box
        sx={{ width: "200px", height: "200px", bgcolor: "secondary.main" }}
      ></Box>

      <Box
        sx={{ width: "200px", height: "200px", bgcolor: "secondary.light" }}
      ></Box>

      <Box
        sx={{ width: "200px", height: "200px", bgcolor: "secondary.dark" }}
      ></Box>
    </Stack>
  );
};

export default LessonThemeCustomization;
