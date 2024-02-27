import { Avatar, AvatarGroup, Stack } from "@mui/material";

const LessonAvatar = () => {
  return (
    <Stack spacing={5}>
      <Stack direction="row">
        <AvatarGroup max={4}>
          <Avatar src="https://randomuser.me/api/portraits/women/33.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/58.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/women/28.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/24.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/women/18.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/21.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/women/65.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/74.jpg" />
        </AvatarGroup>
      </Stack>

      <Stack direction="row">
        <AvatarGroup>
          <Avatar sx={{ marginRight: 2, bgcolor: "primary.light" }}>Ali</Avatar>
          <Avatar variant="rounded">Veli</Avatar>
          <Avatar
            sx={{
              marginRight: 2,
              bgcolor: "success.light",
              width: 70,
              height: 70,
            }}
          >
            Tuba
          </Avatar>
          <Avatar variant="square" sx={{ bgcolor: "warning.light" }}>
            Bora
          </Avatar>
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};

export default LessonAvatar;
