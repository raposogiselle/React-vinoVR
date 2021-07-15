import React from "react";
// import { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/Signup";
import SignedIn from "../components/Navbar2";
// import MyFavs from "../components/Favorites";


import AuthApi from "../utils/AuthApi"
// import dashboard, it might be a seperate nav with a logout btn instead of sign in and sign in

function Routes() {
    return (
        <Switch>
            <RouteRegistration path="/Signin" component={SignIn} /> 
            <RouteRegistration path="/Signup" component={SignUp} /> 
            <RouteProtected path="/Signedin" component={SignedIn} />
        </Switch>
    );
}

const RouteRegistration = ({component: Component, ...rest}) => {

    const authApi = React.useContext(AuthApi);
    return <Route {...rest} render= {props=> !authApi.auth ? (<Component {...props} />) : <Redirect to='/Signedin' />} />;

};
const RouteProtected = ({component: Component, ...rest}) => {
    const authApi = React.useContext(AuthApi);
    return <Route {...rest} render= {(props)=> authApi.auth ? (<Component {...props} />) : <Redirect to='/Signin'/>} />;
};

export default Routes;