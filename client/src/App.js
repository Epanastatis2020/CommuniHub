import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from './hoc/private-route';

import Navbar from './components/Navbar/Navbar';
import Landing from './pages/Landing/Landing';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import ViewTopic from './pages/ViewTopic/ViewTopic';
import Profile from './components/Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import FirebaseAuthState from "./hoc/FirebaseAuthState.js";

import './App.css';

function App() {
    return (
        <Provider>
            <FirebaseAuthState>
                <Router>
                    <div className="pl-0 pr-0 m-0 container-fluid">
                        <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        />
                        <Navbar />
                        <Route exact path="/" component={Landing} />
                        <div className="p-0 m-0 container-fluid">
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/profile" component={Auth(Profile)} />
                            <Route exact path="/dashboard" component={Auth(Dashboard)} />
                            <Route exact path="/topic" component={Auth(ViewTopic)} />
                        </div>
                    </div>
                </Router>
            </FirebaseAuthState>
        </Provider>
    );
}

export default App;
