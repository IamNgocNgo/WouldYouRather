import React, { useContext, createContext, useState } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from 'react-router-dom'
//import { isSignIn } from './App'


function PrivateRoute ({ children, ...rest}, props) {
    const isSignIn = props.isSignIn
    console.log(`isSignIn = ${isSignIn}`)
    return (
        <Route {...rest} render={ () => {
            return isSignIn === true ?
                children
            : <Redirect to="/signin" />
        }} />
    )
}

function mapStateToProps({authedUser}) {
    console.log(`isSignIn in MapState = ${authedUser !== null}`)
    return({
        isSignIn: authedUser !== null
    })
}

export default connect(mapStateToProps) (PrivateRoute)