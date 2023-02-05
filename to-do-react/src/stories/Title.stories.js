import Title from "./Title";

export default {
  title: "TO-DO-APP/Title",
  component: Title,
  argTypes: {
    title: { control: "text" },
    fontSize: { control: "text" },
  },
};

const Template = (args) => <Title {...args} />;

export const MainTitle = Template.bind({});

MainTitle.args = {
  title: "할일 목록",
  fontSize: "1rem",
};

export const ListTitle = Template.bind({});

ListTitle.args = {
  title: "몬스테라 물주기",
  fontSize: "0.813rem",
};
