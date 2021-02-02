import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#33658a',
        light: '#6493ba',
        dark: '#003b5d',
      },
      secondary: {
        main: '#f76264',
        light: '#ff9492',
        dark: '#bf2e3a',
      },
      background: {
        paper: '#303030',
        default: '#000000',
      },
      error: {
        main: '#f8968f',
        light: '#ffc8bf',
        dark: '#c26762',
      },
    },
});