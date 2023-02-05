import Category from "./Category";

export default {
  title: "TO-DO-APP/Category",
  component: Category,
  argTypes: {
    symbol: { control: "text" },
    active: { control: "boolean" },
  },
};

const Template = (args) => <Category {...args} />;

export const CateWaterActive = Template.bind({});

CateWaterActive.args = {
  symbol: "water",
  active: true,
};

export const CateLeafActive = Template.bind({});

CateLeafActive.args = {
  symbol: "leaf",
  active: true,
};

export const CatePotActive = Template.bind({});

CatePotActive.args = {
  symbol: "pot",
  active: true,
};

export const CateWater = Template.bind({});

CateWater.args = {
  symbol: "water",
  active: false,
};

export const CateLeaf = Template.bind({});

CateLeaf.args = {
  symbol: "leaf",
  active: false,
};

export const CatePot = Template.bind({});

CatePot.args = {
  symbol: "pot",
  active: false,
};
