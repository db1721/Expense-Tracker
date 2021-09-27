import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="9d10ce92-1652-4cb8-8e31-ca74298f00b9" language="en-US">
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>,
document.getElementById('root'));
