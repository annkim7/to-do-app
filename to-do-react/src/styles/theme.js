export const theme = {
  /*color*/
  mainGreen: "#0db17d",
  mainRed: "#E75A46",
  mainBlack: "#121212",
  mainSky: "#C0FBE8",
  cateGreen: "#B8E4D1",
  cateBlue: "#AED8D7",
  cateOrange: "#F5B68C",
  borderGreen: "#0DB17D",
  timeGray: "#ADADAD",
  unableGray: "#DEDEDE",
  editGray: "#7C7B7B",
  checkGreen: "#1BB785",
  /*padding*/
  pd25: "1.563rem;",
  pd20: "1.25rem",
};

export const mixins = {
  flexBox: (direction = "row", align = "center", justify = "center") => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,
};
