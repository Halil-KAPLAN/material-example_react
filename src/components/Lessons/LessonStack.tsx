import { Divider, Stack } from "@mui/material";

const LessonStack = () => {
  return (
    <>
      <Stack>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Stack>
      <Stack direction="row" spacing={1}>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
      </Stack>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
      >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Stack>
      <Stack //responsive view
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Stack>
    </>
  );
};

export default LessonStack;
