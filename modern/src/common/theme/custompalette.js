import {
  amber, grey, green, red, common, teal,
} from '@mui/material/colors';

export default (server) => {
  const colors = {
    white: common.white,
    background: grey[50],
    primary: server?.attributes?.colorPrimary || teal[800],
    secondary: '#ffd100',
    positive: green[500],
    medium: amber[700],
    negative: red[500],
    neutral: teal[300],
    geometry: '#3bb2d0',
  };

  return {
    background: {
      default: colors.background,
    },
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
      contrastText: colors.white,
    },
    colors,
    white: {
      main: common.white,
    },
    ligthteal: {
      main: teal[100],
    },
  };
};
