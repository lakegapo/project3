import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Eventlist from './components/eventList/eventList'

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Eventlist />, document.getElementById('root'));


registerServiceWorker();
