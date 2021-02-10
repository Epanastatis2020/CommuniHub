import React from 'react';
import Landing from '../pages/Landing/Landing';

function Auth(ComposedComponent) {
    const user = JSON.parse(sessionStorage.getItem('currentUser'))
    return function Authentication(props) {
        return user
            ? <ComposedComponent {...props} user={user} />
            : <Landing />;
    };
}

export default Auth;