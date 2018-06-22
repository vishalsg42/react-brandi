import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './Container';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router,Switch,Link } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Container} />
    </div>
  </Router>, document.getElementById('root')
);
registerServiceWorker();
