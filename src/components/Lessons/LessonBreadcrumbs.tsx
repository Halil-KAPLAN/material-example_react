import { Breadcrumbs, Link } from "@mui/material";

const LessonBreadcrumbs = () => {
  return (
    <Breadcrumbs separator="-" maxItems={2}>
      <Link href="/" underline="hover">
        MainPage
      </Link>
      <Link underline="none">Blog</Link>
      <Link>About</Link>
      <Link>About</Link>
      <Link>About</Link>
      <Link>About</Link>
      <Link>About</Link>
      <Link>About</Link>
    </Breadcrumbs>
  );
};

export default LessonBreadcrumbs;
