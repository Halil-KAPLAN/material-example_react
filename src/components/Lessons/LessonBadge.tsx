import MailIcon from "@mui/icons-material/Mail";
import { Badge, Stack } from "@mui/material";

const LessonBadge = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Badge badgeContent={155} max={99} color="secondary">
        <MailIcon fontSize="large" htmlColor="gray" />
      </Badge>

      <Badge
        badgeContent={155}
        max={99}
        color="warning"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MailIcon fontSize="large" htmlColor="gray" />
      </Badge>
    </Stack>
  );
};

export default LessonBadge;
