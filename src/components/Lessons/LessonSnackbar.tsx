import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton, Snackbar } from "@mui/material";
import { useState } from "react";

const LessonSnackbar = () => {
  const [open, setOpen] = useState(false);

  const stackAction = (
    <>
      <Button sx={{ color: "red" }} size="small" onClick={() => setOpen(false)}>
        Close
      </Button>
      <IconButton color="warning" onClick={() => setOpen(false)}>
        <CloseIcon />
      </IconButton>
    </>
  );

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Snackbar</Button>
      <Snackbar
        open={open}
        message="Error occurred!"
        action={stackAction}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </>
  );
};

export default LessonSnackbar;
