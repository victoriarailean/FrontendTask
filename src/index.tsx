import Main from 'main';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);