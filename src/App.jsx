const { default: CircularIntegration } = require("./Accept");
const { default: DetailedAccordion } = require("./Accord");
const { default: PrimarySearchAppBar } = require("./App-bar");
const { default: ImageAvatars } = require("./Avatar");
const { default: BadgeVisibility } = require("./Badge");
const { default: Buttons } = require("./Buttons");
const { default: RecipeReviewCard } = require("./Card");
const { default: SwipeableTextMobileStepper } = require("./Carousel");
const { default: Clock } = require("./Clock");
const { default: Containers } = require("./Containers");
const { default: Date } = require("./Date");
const { default: FormDialog } = require("./Dialouge");
const { default: MiddleDividers } = require("./Divider");
const { default: MiniDrawer } = require("./Drawer");
const { default: Links } = require("./Links");
const { default: CustomizedMenus } = require("./Menu");
const { default: SimpleBottomNavigation } = require("./Navigation");
const { default: RouterBreadcrumbs } = require("./Routers");
const { default: ScrollableTabsButtonForce } = require("./Scroll");
const { default: IntegrationNotistack } = require("./Snack");
const { default: CustomizedSteppers } = require("./Strepper");
const { default: SwitchLabels } = require("./Switch");
const { default: EnhancedTable } = require("./Table");
const { default: SimpleTooltips } = require("./Tooltip");
const { default: Volume } = require("./Volume");

function App() {
  return (
    <div className="App">
      <Buttons />
      <Containers />
      <Date />
      <Volume />
      <SwitchLabels />
      <SimpleBottomNavigation />
      <RouterBreadcrumbs />
      <MiniDrawer />
      <Links />
      <CustomizedMenus />
      <CustomizedSteppers />
      <SwipeableTextMobileStepper />
      <ScrollableTabsButtonForce />
      <PrimarySearchAppBar />
      <RecipeReviewCard />
      <DetailedAccordion />
      <CircularIntegration />
      <FormDialog />
      <IntegrationNotistack />
      <ImageAvatars />
      <BadgeVisibility />
      <MiddleDividers />
      <EnhancedTable />
      <SimpleTooltips />
      <Clock/>
    </div>
  );
}

export default App;
