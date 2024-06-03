import { BrowserRouter } from 'react-router-dom';
import { Routes } from './auth/Routes';

export default function App() {
  return (
    <BrowserRouter>
      <Routes authLevel={9} />
    </BrowserRouter>
  );
}
