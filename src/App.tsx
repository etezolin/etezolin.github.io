import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyle from './assets/styles/globalStyles';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import { LanguageProvider } from './contexts/LanguageContext';
import './i18n';

function App() {
  return (
    <LanguageProvider>
      <GlobalStyle />
      <Navbar />
      <Footer />
      <Routes />
      <ToastContainer autoClose={3000} className="toast-container" />
    </LanguageProvider>
  );
}

export default App;
