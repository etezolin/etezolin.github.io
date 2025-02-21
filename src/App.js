// src/App.tsx
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
import Routes from './routes';
import GlobalStyle from './assets/styles/globalStyles';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import { LanguageProvider } from './contexts/LanguageContext';
import './i18n';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <LanguageProvider>
          <GlobalStyle />
          <Navbar />
          <Footer />
          <Routes />
          <ToastContainer autoClose={3000} className="toast-container" />
        </LanguageProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
