import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Container from '@mui/material/Container';
import AppRouter from './components/AppRouter';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container
        style={{
          display: 'flex',
          minHeight: '80vh',
          marginTop: '35px',
          justifyContent: 'center',
        }}
        maxWidth="xl"
      >
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
}

export default App;
