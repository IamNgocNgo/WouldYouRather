import React, { Component } from 'react' 
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class SignInStatus extends Component {
    state = {
        toSignIn: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(setAuthedUser(null))
        this.setState({toSignIn: true})
    }

    render() {
        if (this.state.toSignIn === true){
            return <Redirect to='/signin'/>
        }

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

export default connect(mapStateToProps) (SignInStatus)