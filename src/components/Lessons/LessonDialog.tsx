import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

const LessonDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseDialog = () => setIsOpen(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <Dialog open={isOpen} onClose={handleCloseDialog}>
        <DialogTitle>Which do you like?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Which frontend framework do you prefer?
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleCloseDialog}>React</Button>
            <Button onClick={handleCloseDialog}>Vue</Button>
            <Button onClick={handleCloseDialog}>Angular</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LessonDialog;
