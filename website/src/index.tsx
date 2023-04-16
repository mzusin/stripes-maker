import './css/index.pcss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './data/store';
import App from './ui/app';

/**
 * Used for color picker:
 * https://github.com/mzusin/toolcool-color-picker
 */
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'toolcool-color-picker': any;
        }
    }
}

/**
 * Entry point.
 */
const init = () => {
    const $root =  document.getElementById('root') as HTMLElement;
    if(!$root) return;

    const root = ReactDOM.createRoot($root);
    root.render(
        <React.StrictMode>
            <Provider store={ store }>
                <App />
            </Provider>
        </React.StrictMode>
    );
};

init();



