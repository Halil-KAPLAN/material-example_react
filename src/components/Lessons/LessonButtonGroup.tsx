import { Button, Stack, ButtonGroup } from "@mui/material";

const LessonButtonGroup = () => {
  return (
    <>
      <Stack direction="row" spacing={2} marginBottom={2}>
        <ButtonGroup variant="contained">
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </ButtonGroup>

        <ButtonGroup variant="outlined">
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </ButtonGroup>

        <ButtonGroup variant="text">
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="warning"
        >
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </ButtonGroup>
      </Stack>
    </>
  );
};

export default LessonButtonGroup;
