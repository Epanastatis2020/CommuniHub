import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Landing from './pages/Landing/Landing';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContextProvider } from './store';

// NOTE TO SELF - below Auth methods not working
// import Auth from './global/private-route/PrivateRoute';
// import Auth from './hoc/Auth';

import './App.css';

function App() {
    return (
        <AppContextProvider>
            <Router>
                <div className="pl-0 pr-0 m-0 container-fluid">
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <div className="p-0 m-0 container-fluid">
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/dashboard" component={Dashboard} />
                    </div>
                </div>
            </Router>
        </AppContextProvider>
    );
}

export default App;
