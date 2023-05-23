import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../store/Context';

const withAuthRedirect = (Component) => {
    const AuthRedirectComponent = (props) => {
        const { user } = useContext(AuthContext);

        if (user) {
            return <Redirect to="/" />;
        }

        return <Component {...props} />;
    };

    return AuthRedirectComponent;
};

export default withAuthRedirect;