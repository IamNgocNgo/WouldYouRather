import React, { Component } from 'react' 
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class SignInStatus extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(setAuthedUser(null))
        // Do not use Redirect bc if so, I need setState({toSignIn: true}) here, 
        // If true, on render, return Redirect
        // However, in App.js, I set this.props.isSignIn===true?.
        // So after click Submit, isSignIn===false, SignInStatus Unmount => can't Redirect.
        this.props.history.push('/')
    }

    render() {
        const {name, avatar} = this.props
        return(
            <div className='nav'>
                <ul>
                    <li>Hello, {name}</li>
                    <li>
                        <img
                            src={avatar}
                            alt={`Avatar of ${name}`}
                            className="avatar"
                        />
                    </li>
                    <li>
                        <button onClick={this.handleSubmit}>Log out</button>
                    </li>
                </ul>
            </div>
    )
    }
}

function mapStateToProps({authedUser, users}) {
    return({
        name: authedUser? users[authedUser].name: null,
        avatar: authedUser? users[authedUser].avatarURL: null
    })
}

export default withRouter(connect(mapStateToProps) (SignInStatus))