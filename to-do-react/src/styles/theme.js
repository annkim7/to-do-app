export const theme = {
  /*color*/
  logoGreen: "#0DB17D",
  mainGreen: "#1BB785",
  mainRed: "#E75A46",
  mainBlack: "#121212",
  mainSky: "#C0FBE8",
  cateGreen: "#B8E4D1",
  cateBlue: "#AED8D7",
  cateOrange: "#F5B68C",
  borderGreen: "#0DB17D",
  unableGray: "#DEDEDE",
  editGray: "#7C7B7B",

  /*padding*/
  pd25: "1.563rem;",
};

export const mixins = {
  flexBox: (direction = "row", align = "center", justify = "center") => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,
};
