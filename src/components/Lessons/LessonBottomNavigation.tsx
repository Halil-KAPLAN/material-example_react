import { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Favorite, LocationOn, Restore } from "@mui/icons-material";

const LessonBottomNavigation = () => {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(_e, newValue) => setValue(newValue)}
      sx={{
        width: "100%",
        position: "absolute",
        bottom: 10,
      }}
    >
      <BottomNavigationAction label="Recents" icon={<Restore />} />
      <BottomNavigationAction label="Favorite" icon={<Favorite />} />
      <BottomNavigationAction label="Location" icon={<LocationOn />} />
    </BottomNavigation>
  );
};

export default LessonBottomNavigation;
