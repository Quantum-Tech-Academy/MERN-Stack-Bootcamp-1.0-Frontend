import React from "react";

const authInfo = {
    isLoggedIn: false,
    token: null,
}

const AuthContext = React.createContext(authInfo);

export default AuthContext;