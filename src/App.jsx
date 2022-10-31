import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <div className="global_background">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
