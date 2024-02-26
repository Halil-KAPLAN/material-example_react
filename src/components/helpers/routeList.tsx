import Home from "../Home";
import {
  LessonAccordion,
  LessonAppBar,
  LessonAutoComplete,
  LessonBox,
  LessonBreadcrumbs,
  LessonButton,
  LessonButtonGroup,
  LessonCard,
  LessonCheckbox,
  LessonDrawer,
  LessonGrid,
  LessonImageList,
  LessonLink,
  LessonPaper,
  LessonRadio,
  LessonRadioGroup,
  LessonSelect,
  LessonStack,
  LessonTextfield,
  LessonTypography,
} from "../Lessons";

interface RouteList {
  title: string;
  path: string;
  element: JSX.Element;
}

const routeList: RouteList[] = [
  { title: "Home", path: "/", element: <Home /> },
  { title: "Typography", path: "/typography", element: <LessonTypography /> },
  { title: "Button", path: "/button", element: <LessonButton /> },
  {
    title: "ButtonGroup",
    path: "/buttonGroup",
    element: <LessonButtonGroup />,
  },
  { title: "Textfield", path: "/textfield", element: <LessonTextfield /> },
  { title: "Radio", path: "/radio", element: <LessonRadio /> },
  { title: "RadioGroup", path: "/radioGroup", element: <LessonRadioGroup /> },
  { title: "Select", path: "/select", element: <LessonSelect /> },
  { title: "Checkbox", path: "/checkbox", element: <LessonCheckbox /> },
  {
    title: "AutoComplete",
    path: "/autoComplete",
    element: <LessonAutoComplete />,
  },
  { title: "Box", path: "/box", element: <LessonBox /> },
  { title: "Stack", path: "/stack", element: <LessonStack /> },
  { title: "Grid", path: "/grid", element: <LessonGrid /> },
  { title: "Card", path: "/cards", element: <LessonCard /> },
  { title: "Accordion", path: "/accordion", element: <LessonAccordion /> },
  { title: "App Bar", path: "/appBar", element: <LessonAppBar /> },
  { title: "Image List", path: "/imageList", element: <LessonImageList /> },
  { title: "Paper", path: "/paper", element: <LessonPaper /> },
  { title: "Link", path: "/link", element: <LessonLink /> },
  {
    title: "Breadcrumbs",
    path: "/breadcrumbs",
    element: <LessonBreadcrumbs />,
  },
  { title: "Drawer", path: "/drawer", element: <LessonDrawer /> },
];

export default routeList;
