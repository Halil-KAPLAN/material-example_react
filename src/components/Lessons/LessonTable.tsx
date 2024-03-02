import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import someFoodData from "../helpers/data/someFoodData";

const LessonTable = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Dessert</TableCell>
          <TableCell>Calories</TableCell>
          <TableCell>Fat</TableCell>
          <TableCell>Carbs</TableCell>
          <TableCell>Protein</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {someFoodData.map(({ calories, carbs, fat, name, protein }, i) => (
          <TableRow key={i}>
            <TableCell>{name}</TableCell>
            <TableCell>{calories}</TableCell>
            <TableCell>{fat}</TableCell>
            <TableCell>{carbs}</TableCell>
            <TableCell>{protein}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default LessonTable;
