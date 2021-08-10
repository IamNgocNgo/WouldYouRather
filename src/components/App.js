import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Home from './Home'
import LoadingBar from 'react-redux-loading'
import PollQuestion from './PollQuestion'
import UnansweredQuestion from './UnansweredQuestion'
import ResultQuestion from './ResultQuestion'
import User from './User'
import NewQuestion from './NewQuestion'
import SignIn from './SignIn';
import Navigation from './Navigation'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Alert from './Alert'

class App extends Component {
    componentDidMount() {
      this.props.dispatch(handleInitialData())
    }
    render(){
        return (
            <Router>
                <div>
                    <LoadingBar/>
                    {this.props.loadingUsers === true? null :
                        <div>
                            <Navigation/>
                            <Route path='/' exact component={SignIn}/>
                            <Route path='/alert' component={Alert}/>
                        </div>
                    }
                    {this.props.loading === true? null :
                        <div>
                            <Route path='/home' component={Home}/>
                            <Route path='/add' component={NewQuestion}/>
                        </div>}
                    {/*
                    <Route path='/home' component={Home}/>
                    <User id='tylermcginnis' rank={1}/> */}
                </div>
            </Router>
        )
    }
}

function mapStateToProps ({ users, authedUser }) {
    return {
      loading: authedUser === null,
      loadingUsers: users === null
    }
  }

export default connect(mapStateToProps) (App);
