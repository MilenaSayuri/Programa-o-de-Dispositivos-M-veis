import React from 'react';
import ReactDOM from 'react-dom/client'; // Importando createRoot do lugar correto
import App from './components/App';
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";


// Pegue o elemento raiz da aplicação
const rootElement = document.getElementById('root');

// Crie a raiz com o novo createRoot
const root = ReactDOM.createRoot(rootElement);

// Renderize o componente App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
