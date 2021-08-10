import React, { Component } from 'react' 
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Navigation extends Component {
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
            <Redirect to='/signin'/>
        }
        if (this.props.logOut === true) {
            return(
                <nav className='nav'>
                    <ul>
                        <li>
                            <NavLink to='/alert'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/alert'>
                                New Question
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/alert'>
                                Leader Board
                            </NavLink>
                        </li>
                    </ul>
                </nav> 
            )
        }
        else{
            const {name, avatar} = this.props
            return(
                <nav className='nav'>
                    <ul>
                        <li>
                            <NavLink to='/home' activeClassName='active'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/new' activeClassName='active'>
                                New Question
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/leaderboard' activeClassName='active'>
                                Leader Board
                            </NavLink>
                        </li>
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
                </nav>
        )
        }
    }
}

function mapStateToProps({authedUser, users}) {
    console.log("HERE")
    return({
        logOut: authedUser === null,
        name: authedUser? users[authedUser].name: null,
        avatar: authedUser? users[authedUser].avatarURL: null
    })
}

export default connect(mapStateToProps) (Navigation)