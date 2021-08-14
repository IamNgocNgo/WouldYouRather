import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from 'react-router-dom'

function PrivateRoute (props) {
    const { children, ...rest} = props
    const isSignIn = props.isSignIn

    return (   
        <Route {...rest} render={ ({location}) => {
            return isSignIn === true ?
                children
                : 
                <Redirect to={{pathname:"/alert", state: {from: location}}} />
        }} />
    )
}

function mapStateToProps({authedUser}, props) {
    return({
        isSignIn: authedUser !== null
    })
}

export default withRouter(connect(mapStateToProps) (PrivateRoute))