import './css/index.pcss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './data/store';
import App from './App';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'toolcool-color-picker': any;
        }
    }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={ store }>
            <App />
        </Provider>
    </React.StrictMode>
);

