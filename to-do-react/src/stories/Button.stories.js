import Button from "./Button";

export default {
  title: "TO-DO-APP/Button",
  component: Button,
  argTypes: {
    title: { control: "text" },
    size: { control: "text" },
    modal: { control: "boolean" },
    color: { control: "text" },
  },
};

const Template = (args) => <Button {...args} />;

export const BigButton = Template.bind({});

BigButton.args = {
  title: "추가",
  size: "span 2",
  color: "green",
};

export const SmButton = Template.bind({});

SmButton.args = {
  title: "수정",
  size: "span 1",
  color: "green",
};

export const SmRedButton = Template.bind({});

SmRedButton.args = {
  title: "삭제",
  size: "span 1",
  color: "red",
};

export const modalButton = Template.bind({});

modalButton.args = {
  title: "확인",
  size: "span 1",
  color: "green",
  modal: true,
};

export const modalRedButton = Template.bind({});

modalRedButton.args = {
  title: "삭제",
  size: "span 1",
  color: "red",
  modal: true,
};
