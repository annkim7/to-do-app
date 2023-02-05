import Input from "./Input";

export default {
  title: "TO-DO-APP/Input",
  component: Input,
  argTypes: {
    label: { control: "text" },
  },
};

const Template = (args) => <Input {...args} />;

export const InputBox = Template.bind({});

InputBox.args = {
  label: "제목",
};
