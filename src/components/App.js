import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Home from './Home'
import LoadingBar from 'react-redux-loading'
import NewQuestion from './NewQuestion'
import SignIn from './SignIn';
import Navigation from './Navigation'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Alert from './Alert'
import LeaderBoard from './LeaderBoard';
import QuestionInfo from './QuestionInfo';
import PrivateRoute from './PrivateRoute'
import SignInStatus from './SignInStatus';

class App extends Component {
    componentDidMount() {
      this.props.dispatch(handleInitialData())
    }
    render(){
        return(
            <Router>
                <div>
                    <LoadingBar/>
                    <Navigation/>

                    <Route path="/signin">
                        <SignIn />
                    </Route>

                    <Route path="/alert">
                        <Alert />
                    </Route>
                
                    
                    <div>
                        {this.props.isSignIn === true? <SignInStatus/> : null}
                        <PrivateRoute path='/home'>
                            <Home/>
                        </PrivateRoute>
                        <PrivateRoute path="/add">
                            <NewQuestion />
                        </PrivateRoute>
                        <PrivateRoute path="/leaderboard">
                            <LeaderBoard />
                        </PrivateRoute>
                        <PrivateRoute path="/questions/:question_id">
                            <QuestionInfo />
                        </PrivateRoute>
                    </div>      
                </div>
            </Router>
        )
    }
}

function mapStateToProps ({ authedUser }) {
    return {
      isSignIn: authedUser !== null
    }
  }

export default connect(mapStateToProps) (App);
