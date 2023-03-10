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
  uncheckGray: "#D9D9D9",
  /*padding*/
  pd25: "1.563rem;",
  pd20: "1.25rem",
  /*box-shadow*/
  borderShadow:
    "0px 0px 0px 1px rgba(27, 31, 35, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.02)",
  modalShadow:
    "0px 8px 16px -8px rgba(0, 0, 0, 0.3), 0px 13px 27px -5px rgba(50, 50, 93, 0.25)",
};

export const mixins = {
  flexBox: (direction = "row", align = "center", justify = "center") => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,
  positionCenter: () => `
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  modalBg: () => `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 99;
  `,
};
