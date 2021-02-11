import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
    const user = JSON.parse(sessionStorage.getItem('currentUser'))
    return (
        <Route {...rest} render={props => (
            user
                ? <Component {...props} user={user}/>
                : <Redirect to="/" />
        )} />
    );
};


export default AuthenticatedRoute;