import { BrowserRouter } from 'react-router-dom';
import { Routes } from './auth/Routes';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <BrowserRouter>
      <Routes authLevel={9} />
      <Navigation authLevel={9} />
    </BrowserRouter>
  );
}
