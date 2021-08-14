import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Home from './Home'
import LoadingBar from 'react-redux-loading'
import NewQuestion from './NewQuestion'
import SignIn from './SignIn';
import Navigation from './Navigation'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import Alert from './Alert'
import LeaderBoard from './LeaderBoard';
import QuestionInfo from './QuestionInfo';
import PrivateRoute from './PrivateRoute'
import SignInStatus from './SignInStatus';
import PageNotFound from './PageNotFound';

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
                    {this.props.isSignIn === true? <SignInStatus/> 
                        :
                        <NavLink to='/signin' activeClassName='active'>
                            Sign In
                        </NavLink>
                    }

                    <Route path="/signin">
                        <SignIn />
                    </Route>
                    <Route path="/alert">
                        <Alert />
                    </Route>
                    <Route path="/404">
                        <PageNotFound />
                    </Route>
                    
                    <div>
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
