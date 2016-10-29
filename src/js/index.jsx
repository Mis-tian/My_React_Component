import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';   
import 'babel-polyfill';
import { Router, Route, Link , hashHistory} from 'react-router';
import Tv from  './tv';
import App from  './app';
import Show from  './show';
import '../sass/bootstrap';
import '../sass/index';
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/tv" component={Tv}>
                <Route path="/tv/Show" component={Show}/>
            </Route>  
            <Route path="/refs" component={Show}/>      
        </Route>
    </Router>
),document.getElementById('app'));