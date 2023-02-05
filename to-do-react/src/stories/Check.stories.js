import Check from "./Check";

export default {
  title: "TO-DO-APP/Check",
  component: Check,
  argTypes: {
    label: { control: "text" },
  },
};

const Template = (args) => <Check {...args} />;

export const CheckBox = Template.bind({});

CheckBox.args = {
  label: "완료",
};
