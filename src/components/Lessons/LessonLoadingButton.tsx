import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";

const LessonLoadingButton = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => startLoad(), []);

  const startLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <Stack spacing={2} direction="row" sx={{ marginLeft: 10 }}>
      <LoadingButton loading={loading} onClick={() => startLoad()}>
        Save
      </LoadingButton>

      <LoadingButton
        loading={loading}
        variant="outlined"
        onClick={() => startLoad()}
      >
        Save
      </LoadingButton>
    </Stack>
  );
};

export default LessonLoadingButton;
