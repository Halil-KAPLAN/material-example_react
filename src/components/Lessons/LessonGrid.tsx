import { Box, Grid } from "@mui/material";

const LessonGrid = () => {
  return (
    <Box>
      <Grid container>
        <Grid xs={8}>8 Unit</Grid>
        <Grid xs={4}>4 Unit</Grid>
        <Grid xs={8}>8 Unit</Grid>
        <Grid xs={4}>4 Unit</Grid>
      </Grid>
      <Grid container>
        <Grid xs={12} md={4}>
          12 8 1
        </Grid>
        <Grid xs={12} md={4}>
          12 8 2
        </Grid>
      </Grid>
    </Box>
  );
};

export default LessonGrid;
