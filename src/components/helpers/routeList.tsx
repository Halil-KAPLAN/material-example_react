import Home from "../Home";
import {
  LessonAccordion,
  LessonAlert,
  LessonAppBar,
  LessonAutoComplete,
  LessonAvatar,
  LessonBadge,
  LessonBottomNavigation,
  LessonBox,
  LessonBreadcrumbs,
  LessonButton,
  LessonButtonGroup,
  LessonCard,
  LessonCheckbox,
  LessonDialog,
  LessonDrawer,
  LessonGrid,
  LessonImageList,
  LessonLink,
  LessonList,
  LessonPaper,
  LessonProgress,
  LessonRadio,
  LessonRadioGroup,
  LessonSelect,
  LessonSkeleton,
  LessonSnackbar,
  LessonSpeedDial,
  LessonStack,
  LessonTextfield,
  LessonTooltip,
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
    title: "Auto Complete",
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
  { title: "Badge", path: "/badge", element: <LessonBadge /> },
  { title: "Speed Dial", path: "/speedDial", element: <LessonSpeedDial /> },
  {
    title: "Bottom Navigation",
    path: "/bottomNavigation",
    element: <LessonBottomNavigation />,
  },
  { title: "List", path: "/list", element: <LessonList /> },
  { title: "Avatar", path: "/avatar", element: <LessonAvatar /> },
  { title: "Tooltip", path: "/tooltip", element: <LessonTooltip /> },
  { title: "Alert", path: "/alert", element: <LessonAlert /> },
  { title: "Dialog", path: "/dialog", element: <LessonDialog /> },
  { title: "Snackbar", path: "/snackbar", element: <LessonSnackbar /> },
  { title: "Progress", path: "/progress", element: <LessonProgress /> },
  { title: "Skeleton", path: "/skeleton", element: <LessonSkeleton /> },
];

export default routeList;
