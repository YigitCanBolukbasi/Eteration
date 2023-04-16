import breakpoints from './breakpoints';
import palette from './palette';

const ThemeOptions = () => ({
  breakpoints: breakpoints(),
  palette: palette(),
  shape: {
    borderRadius: 8
  }
});

export default ThemeOptions;
