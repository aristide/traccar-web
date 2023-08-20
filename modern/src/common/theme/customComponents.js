import { common, grey, teal } from '@mui/material/colors';

export default {
  MuiUseMediaQuery: {
    defaultProps: {
      noSsr: true,
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        backgroundColor: grey[50],
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      sizeMedium: {
        height: '40px',
      },
    },
  },
  MuiFormControl: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiSnackbar: {
    defaultProps: {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center',
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        backgroundColor: teal[900],
        color: common.white,
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        color: teal[900],
      },
    },
  },
  MuiListItemText: {
    styleOverrides: {
      root: {
        color: teal[900],
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        '&.Mui-selected': {
          backgroundColor: teal[50],
        },
        '&.Mui-focusVisible': {
          backgroundColor: teal[50],
        },
      },
    },
  },
  MuiBottomNavigation: {
    styleOverrides: {
      root: {
        backgroundColor: teal[50],
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      children: {
        backgroundColor: teal[800],
      },
    },
  },
  MuiBreadcrumbs: {
    styleOverrides: {
      root: {
        color: common.white,
        '& .MuiBreadcrumbs-li h6': {
          color: common.white,
        },
      },
    },
  },
};
