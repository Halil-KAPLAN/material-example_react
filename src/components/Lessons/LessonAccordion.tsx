import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const LessonAccordion = () => {
  const [expanded, setExpanded] = useState<string | boolean>("");

  const handleExpandAccordion =
    (accName: string) =>
    (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded && accName);
    };

  return (
    <>
      <Typography variant="h5">Basic Accordion</Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>First Part</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam aut
          consequuntur atque quas possimus voluptas repellat nam accusantium
          sapiente, tempore, eum animi, adipisci in minus reprehenderit dolores.
          Maiores, tempora placeat?
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Second Part</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam aut
          consequuntur atque quas possimus voluptas repellat nam accusantium
          sapiente, tempore, eum animi, adipisci in minus reprehenderit dolores.
          Maiores, tempora placeat?
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Third Part</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam aut
          consequuntur atque quas possimus voluptas repellat nam accusantium
          sapiente, tempore, eum animi, adipisci in minus reprehenderit dolores.
          Maiores, tempora placeat?
        </AccordionDetails>
      </Accordion>

      <Typography variant="h5" marginTop={5}>
        Controlled Accordion
      </Typography>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleExpandAccordion("panel1")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>First Part</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam aut
          consequuntur atque quas possimus voluptas repellat nam accusantium
          sapiente, tempore, eum animi, adipisci in minus reprehenderit dolores.
          Maiores, tempora placeat?
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleExpandAccordion("panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Second Part</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam aut
          consequuntur atque quas possimus voluptas repellat nam accusantium
          sapiente, tempore, eum animi, adipisci in minus reprehenderit dolores.
          Maiores, tempora placeat?
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleExpandAccordion("panel3")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Third Part</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam aut
          consequuntur atque quas possimus voluptas repellat nam accusantium
          sapiente, tempore, eum animi, adipisci in minus reprehenderit dolores.
          Maiores, tempora placeat?
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default LessonAccordion;
