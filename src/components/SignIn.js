import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class SignIn extends Component {
    state = {
        authedUser:''
    }
    onValueChange = (event) => {
        event.preventDefault()
        this.setState({authedUser: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch(setAuthedUser(this.state.authedUser))
        // TODO: link this to /home
    }
    render() {
        const {users} = this.props
        const uids = Object.keys(users)
        return(
            <div className='sign-in'>
                <p className='sign-in-title'>Welcome to Would You Rather App!</p>
                <p style={{textAlign:'center'}}>Please sign in to continue</p>
                <p className='sign-in-title'>Sign In</p>
                <form onSubmit={this.handleSubmit}>
                    <select className='sign-in-menu' onChange={this.onValueChange}>
                        <option value='none' disabled>Select User</option>
                        {uids.map((uid)=><option key={uid} value={uid}>{users[uid].name}</option>)}
                    </select>
                    <button className='submit-button'>Sign in</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({users}){
    return {
        users
    }
}
export default connect(mapStateToProps)(SignIn)