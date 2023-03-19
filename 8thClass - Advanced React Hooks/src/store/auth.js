import React from "react";

const authInfo = {
    isLoggedIn: false,
}

const AuthContext = React.createContext(authInfo);

export default AuthContext;