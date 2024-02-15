import { Typography } from "@mui/material";

const LessonTypography = () => {
  return (
    <div>
      <Typography variant="body1">
        Body1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
        ullam sint earum cumque illum deserunt quis provident perferendis, eum
        atque unde fugit a debitis tempore deleniti qui praesentium pariatur
        iusto!
      </Typography>

      <Typography variant="body2">
        Body1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
        ullam sint earum cumque illum deserunt quis provident perferendis, eum
        atque unde fugit a debitis tempore deleniti qui praesentium pariatur
        iusto!
      </Typography>

      <Typography variant="h1">H1 bu</Typography>
      <Typography variant="h2">H2 bu</Typography>
      <Typography variant="h3">H3 bu</Typography>
      <Typography variant="h4">H4 bu</Typography>
      <Typography variant="h5">H5 bu</Typography>
      <Typography variant="h6">H6 bu</Typography>

      <Typography variant="h1" component="h4">
        H6 bu
      </Typography>

      <Typography variant="h1" align="left">
        H1 bu
      </Typography>
      <Typography variant="h1" align="right">
        H1 bu
      </Typography>

      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
    </div>
  );
};

export default LessonTypography;
