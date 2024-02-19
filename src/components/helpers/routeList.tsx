import Home from "../Home";
import {
  LessonButton,
  LessonButtonGroup,
  LessonRadioGroup,
  LessonTextfield,
  LessonTypography,
} from "../Lessons";

interface RouteList {
  name: string;
  path: string;
  element: JSX.Element;
}

const routeList: RouteList[] = [
  { name: "Home", path: "/", element: <Home /> },
  { name: "Typography", path: "/typography", element: <LessonTypography /> },
  { name: "Button", path: "/button", element: <LessonButton /> },
  { name: "ButtonGroup", path: "/buttonGroup", element: <LessonButtonGroup /> },
  { name: "Textfield", path: "/textfield", element: <LessonTextfield /> },
  { name: "RadioGroup", path: "/radioGroup", element: <LessonRadioGroup /> },
];

export default routeList;
