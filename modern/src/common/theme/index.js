import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import palette from './palette';
import custompalette from './custompalette';
import dimensions from './dimensions';
import components from './components';
import customComponents from './customComponents';

const customP = true;
export default (server) => useMemo(() => createTheme({
  palette: customP ? custompalette(server) : palette(server),
  dimensions,
  components: customP ? customComponents : components,
}), [server]);
