import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
} from "@mui/material";
import imageDatas from "../helpers/data/imageData";

const LessonImageList = () => {
  return (
    <Stack>
      <ImageList cols={3} variant="masonry">
        {imageDatas.map((data, index) => (
          <ImageListItem key={index}>
            <img src={data.img} loading="lazy" />
            <ImageListItemBar title={data.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList cols={3} variant="woven">
        {imageDatas.map((data, index) => (
          <ImageListItem key={index}>
            <img src={data.img} loading="lazy" />
            <ImageListItemBar title={data.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList /*sx={{ width: 500, height: 450 }} rowHeight={150}*/ cols={3}>
        {imageDatas.map((data, index) => (
          <ImageListItem key={index}>
            <img src={data.img} loading="lazy" />
            <ImageListItemBar title={data.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
};

export default LessonImageList;
