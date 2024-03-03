import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Masonry } from "@mui/lab";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
} from "@mui/material";

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const LessonMasonry = () => {
  return (
    <Masonry columns={3} spacing={2}>
      {heights.map((height, index) => (
        <Paper key={index}>
          <Accordion sx={{ minHeight: height }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Accordion {index + 1}
            </AccordionSummary>
            <AccordionDetails>
              Contents {index + 1}, Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Aliquid sapiente aut labore obcaecati unde,
              vitae et necessitatibus possimus dolores excepturi porro accusamus
              praesentium eveniet{" "}
            </AccordionDetails>
          </Accordion>
        </Paper>
      ))}
    </Masonry>
  );
};

export default LessonMasonry;
