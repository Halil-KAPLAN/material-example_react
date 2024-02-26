import { Link, Stack } from "@mui/material";

const LessonLink = () => {
  return (
    <Stack alignItems="baseline">
      <Link href="https://www.google.com">Go Google</Link>
      <Link href="https://www.google.com" color="error">
        Go Google
      </Link>
      <Link href="https://www.google.com" color="#9c27b0" variant="body2">
        Go Google
      </Link>
      <Link href="https://www.google.com" underline="hover">
        Go Google
      </Link>
      <Link
        component="button"
        onClick={() => {
          alert("I'm a button.");
        }}
      >
        Link Button
      </Link>
    </Stack>
  );
};

export default LessonLink;
