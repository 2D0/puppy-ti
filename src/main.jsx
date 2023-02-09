import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from '@/style/GlobalStyle.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <App />
        <GlobalStyle />
    </>,
);
