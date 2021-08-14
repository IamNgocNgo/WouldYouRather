import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'

class Alert extends Component {
    state = {
        toSignIn: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({toSignIn: true})
    }
    
    render(){
        if (this.state.toSignIn === true){
            return  <Redirect to={{pathname:"/signin", state: {from: this.props.location.state.from}}}/>
        }
        return(
            <div className='alert'>
                <p >You must sign in to continue</p>
                <button onClick={this.handleSubmit}>OK</button>
            </div>
        )
    }
}

export default withRouter(Alert)