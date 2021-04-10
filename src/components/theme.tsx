import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    grey: {
      100: "#afafaf",
      200: "#808080",
      300: "#414141",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
  },
  typography: {
    fontFamily: "Helvetica",
    subtitle1: {
      fontFamily: "Lulo Clean One Bold",
      fontWeight: "normal",
      fontSize: "0.625rem",
    },
  },
})

export default theme
