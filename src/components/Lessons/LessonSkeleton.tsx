import { Box, Skeleton } from "@mui/material";
import { useState } from "react";

const LessonSkeleton = () => {
  const [loading, setLoading] = useState(true);

  (() => {
    setTimeout(() => setLoading(false), 3000);
  })();

  return (
    <Box>
      {loading ? (
        <Skeleton width={450} height={250} animation="wave" />
      ) : (
        <img
          width={450}
          height={250}
          alt="skeleton"
          src="https://source.unsplash.com/random/256*144"
        />
      )}
    </Box>
  );
};

export default LessonSkeleton;
