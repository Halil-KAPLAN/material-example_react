import { Tab, TabList, TabPanel, Tabs } from "@mui/joy";

const LessonTabs = () => {
  return (
    <Tabs defaultValue={0}>
      <TabList>
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
      </TabList>
      <TabPanel value={0}>First UI</TabPanel>
      <TabPanel value={1}>Second UI</TabPanel>
      <TabPanel value={2}>Third UI</TabPanel>
    </Tabs>
  );
};

export default LessonTabs;
