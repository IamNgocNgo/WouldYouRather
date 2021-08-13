import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute (props) {
    const { children, ...rest} = props
    const isSignIn = props.isSignIn
    
    return (
        <Route {...rest} render={ () => {
            return isSignIn === true ?
                children
            : <Redirect to="/alert" />
        }} />
    )
}

function mapStateToProps({authedUser}) {
    return({
        isSignIn: authedUser !== null
    })
}

export default connect(mapStateToProps) (PrivateRoute)