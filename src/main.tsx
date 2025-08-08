import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import GA4Tracker from './GA4Tracker';

createRoot(document.getElementById("root")!).render(
  <>
    <GA4Tracker />
    <App />
  </>
);
