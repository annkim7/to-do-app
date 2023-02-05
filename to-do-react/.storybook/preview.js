import StoryStyle from "./global";
import { ThemeProvider } from "styled-components";
import { theme, mixins } from "../src/styles/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={{ ...theme, ...mixins }}>
      <StoryStyle />
      <Story />
    </ThemeProvider>
  ),
];
