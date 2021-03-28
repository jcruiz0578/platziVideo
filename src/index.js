import React from 'react';
import ReactDOM from 'react-dom';

//import App from './containers/App'; // ya esa App se renombro a Home y no es la entrada principal
import App from './routes/App'; // cambia por el App del router



ReactDOM.render(
    <App />, document.getElementById('app')
);
