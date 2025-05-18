import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './themes/theme';
import { MainLayout } from './components/Layout/MainLayout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Formation from './components/Formation/Formation';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <Home />
        <About />
        <Formation />
        <Experience />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
