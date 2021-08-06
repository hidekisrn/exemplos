import { Notification } from '@example/components';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#200741',
    },
    secondary: {
      main: '#fe2a59',
    },
  },
  typography: {
    fontFamily: 'TTNorms-Regular',
  },
});

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Notification.SnackbarProvider
      maxSnack={10}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      {children}
    </Notification.SnackbarProvider>
  </ThemeProvider>
);

export default Providers;
