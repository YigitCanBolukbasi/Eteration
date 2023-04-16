import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider
} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import GlobalStyling from './GlobalStyling';
import overrides from './overrides';
import themeOptions from './ThemeOptions';
import typography from './typography';

const ThemeComponent = ({ children }) => {
  const options = themeOptions();
  let globalTheme = createTheme(options);
  const mergeComponentOverrides = theme => ({ ...overrides(theme) });
  const mergeTypographyOverrides = theme => ({ ...typography(theme) });
  const globalStyles = GlobalStyling(globalTheme);

  globalTheme = createTheme(globalTheme, {
    components: mergeComponentOverrides(globalTheme),
    typography: mergeTypographyOverrides(globalTheme)
  });

  return (
    <ThemeProvider theme={globalTheme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};

ThemeComponent.propTypes = {
  children: PropTypes.node.isRequired
};

export default ThemeComponent;
