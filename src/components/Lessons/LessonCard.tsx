import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const LessonCard = () => {
  return (
    <Card
      sx={{
        width: 350,
      }}
    >
      <CardMedia
        height="150px"
        component="img"
        image="https://source.unsplash.com/random"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Title
        </Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          commodi natus eligendi. Veritatis facere accusantium asperiores
          laudantium, velit fugit non quo amet magnam voluptas quas sunt dicta
          consectetur quaerat impedit.
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="error">Clear</Button>
        <Button>Save</Button>
      </CardActions>
    </Card>
  );
};

export default LessonCard;
