import { Delete, Save } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";

const LessonTooltip = () => {
  return (
    <>
      <Tooltip title="Delete" sx={{ left: 80, top: 80 }}>
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete" sx={{ left: 80, top: 80 }} placement="top">
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>

      <Tooltip
        title="Save an Update"
        sx={{ left: 80, top: 80 }}
        placement="top-start"
      >
        <IconButton>
          <Save />
        </IconButton>
      </Tooltip>

      <Tooltip
        title="Save an Update"
        sx={{ left: 80, top: 80 }}
        placement="right"
      >
        <IconButton>
          <Save />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default LessonTooltip;
