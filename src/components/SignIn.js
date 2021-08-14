import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class SignIn extends Component {
    state = {
        authedUser: Object.keys(this.props.users)[0],
        toHome: false
    }

    onValueChange = (event) => {
        event.preventDefault()
        this.setState({authedUser: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch(setAuthedUser(this.state.authedUser))
        this.setState({toHome: true})
    }
    
    render() {
        const {users} = this.props
        const uids = Object.keys(users)

        if (this.state.toHome === true){
            return <Redirect to={this.props.state?.from ||'/home'}/>
        }

        return(
            <div className='sign-in'>
                <p className='sign-in-title'>Welcome to Would You Rather App!</p>
                <p style={{textAlign:'center'}}>Please sign in to continue</p>
                <p className='sign-in-title'>Sign In</p>
                <form onSubmit={this.handleSubmit}>
                    <select 
                        value={this.state.authedUser} 
                        className='sign-in-menu' 
                        onChange={this.onValueChange
                    }>
                        <option value='none' disabled>Select User</option>
                        {uids.map((uid)=><option key={uid} value={uid}>{users[uid].name}</option>)}
                    </select>
                    <button className='submit-button'>Sign in</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({users}, props){
    return {
        users,
        state: props.location.state
    }
}
export default withRouter(connect(mapStateToProps)(SignIn))