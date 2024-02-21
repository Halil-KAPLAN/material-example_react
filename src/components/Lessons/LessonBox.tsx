import { Box } from "@mui/material";

const LessonBox = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        width: 100,
        height: 100,
        color: "white",
        padding: "20px",
        margin: "0 auto",
        "&:hover": {
          backgroundColor: "primary.light",
        },
      }}
    >
      THIS IS A BOX!
    </Box>
  );
};

export default LessonBox;
