import { Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const LessonButton = () => {
  type Color =
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info";
  type Variant = "text" | "outlined" | "contained";
  type Size = "small" | "medium" | "large";

  const variants: Variant[] = ["text", "outlined", "contained"];
  const colors: Color[] = [
    "primary",
    "secondary",
    "success",
    "error",
    "warning",
    "info",
  ];
  const sizes: Size[] = ["small", "medium", "large"];

  return (
    <Stack spacing={5}>
      {sizes.map((size) => (
        <>
          <p>{size}</p>
          {variants.map((variant, vI) => (
            <Stack direction={"row"} spacing={2} key={vI}>
              {colors.map((color, i) => (
                <Button variant={variant} color={color} key={i} size={size}>
                  Button
                </Button>
              ))}
            </Stack>
          ))}
        </>
      ))}

      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => alert("Added!")}>
          <AddIcon color="warning"></AddIcon>
        </Button>

        <Button
          variant="contained"
          color="warning"
          startIcon={<AddIcon></AddIcon>}
        >
          Add
        </Button>

        <Button variant="contained" endIcon={<AddIcon></AddIcon>}>
          Add
        </Button>
      </Stack>
    </Stack>
  );
};
export default LessonButton;
