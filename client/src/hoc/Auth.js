import React from 'react';
import Landing from '../pages/Landing/Landing';
import { useAppContext } from '../store';

function Auth(ComposedComponent) {
    const [ state ] = useAppContext();

    return function Authentication(props) {
        console.log(state.isAuthenticated);

        return state.isAuthenticated
            ? <ComposedComponent {...props} />
            : <Landing />;
    };
}

export default Auth;
