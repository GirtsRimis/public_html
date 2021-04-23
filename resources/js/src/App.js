import React, {Component} from 'react';
import Root from './Root';
import {Route, Switch} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import Home from './components/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Dashboard from './components/dashboard/Dashboard';
import requireAuth from './utils/RequireAuth';

import axios from 'axios';
if (window.location.origin === "http://localhost:3000") {
    axios.defaults.baseURL = "http://127.0.0.1:8000";
} else {
    axios.defaults.baseURL = window.location.origin;
}

class App extends Component {
    render() {
        return (
            <div>
                <Root>
                    <ToastContainer hideProgressBar={true} newestOnTop={true} />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/dashboard" component={requireAuth(Dashboard)} />
                    </Switch>
                </Root>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
