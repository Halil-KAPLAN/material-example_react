import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { Edit, FileCopyOutlined, Print, Share } from "@mui/icons-material";

const LessonSpeedDial = () => {
  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          icon={<FileCopyOutlined />}
          tooltipTitle="Copy"
          tooltipOpen
        />
        <SpeedDialAction icon={<Print />} tooltipTitle="Print" tooltipOpen />
        <SpeedDialAction icon={<Share />} tooltipTitle="Share" tooltipOpen />
      </SpeedDial>

      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 96 }}
        icon={<SpeedDialIcon openIcon={<Edit />} />}
      >
        <SpeedDialAction icon={<Share />} tooltipTitle="Share" tooltipOpen />
      </SpeedDial>
    </>
  );
};

export default LessonSpeedDial;
