import { Box, Link, Stack } from "@mui/material";
import { styled } from "@mui/system";

const StyledLink = styled(Link)({
  textDecoration: "none",
  "&:hover": {
    color: "blue",
  },
});

const Home = () => {
  return (
    <Stack>
      <img src="https://cdn-media-1.freecodecamp.org/images/1*FDNeKIUeUnf0XdqHmi7nsw.png"></img>

      <Box sx={{ margin: "20px auto" }}>
        <StyledLink
          variant="body1"
          href="https://mui.com/material-ui/getting-started/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go Material UI
        </StyledLink>
      </Box>
    </Stack>
  );
};

export default Home;
