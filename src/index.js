import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter} from 'react-router-dom'
import { GlobalContextProvider} from './data/GlobalContext';

ReactDOM.render(
  <GlobalContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>

  </GlobalContextProvider>,
  document.getElementById('root')
);


reportWebVitals();
