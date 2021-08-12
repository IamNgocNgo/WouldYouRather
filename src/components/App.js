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
import {BrowserRouter as Router, 
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation} from 'react-router-dom'
import Alert from './Alert'
import LeaderBoard from './LeaderBoard';
import QuestionInfo from './QuestionInfo';
import PrivateRoute from './PrivateRoute'

class App extends Component {
    componentDidMount() {
      this.props.dispatch(handleInitialData())
    }
    render(){
        return(
                <Router>
                    <div>
                        <LoadingBar/>
                        {/*<AuthButton />*/}

                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/add">New Question</Link>
                        </li>
                        <li>
                            <Link to="/leaderboard">LeaderBoard</Link>
                        </li>
                    </ul>

                        <Route path="/signin">
                            <SignIn />
                        </Route>
                    
                    {this.props.isLoadingDone?
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
                    :null}
                    </div>
                </Router>
        )
    }
    /*render(){
        return (
            <Router>
                <div>
                    <LoadingBar/>
                    <Navigation/>
                    {this.props.loadingUsers === true? null :
                        <div>
                            
                            <Route path='/' exact component={SignIn}/>
                            <Route path='/alert' component={Alert}/>
                        </div>
                    }
                    {this.props.loading === true? null :
                        <div>
                            <Route path='/home' component={Home}/>
                            <Route path='/add' component={NewQuestion}/>
                            <Route path='/leaderboard' component={LeaderBoard}/>
                            <Route path='/questions/:question_id' component={QuestionInfo}/>
                        </div>}
                </div>
            </Router>
        )
    }*/
}

/*function PrivateRoute ({ children, ...rest}) {
    const isSignIn = false
    console.log(`HERE: ${isSignIn}`)
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={ () => {
            return isSignIn === true ?
                children
            : <Redirect to="/signin" />
        }} />
    )
}*/

function mapStateToProps ({ users, authedUser, loadingBar }) {
    return {
      isLoadingDone: loadingBar.default === 0,
      loadingUsers: users === null,
      authedUser
    }
  }

export default connect(mapStateToProps) (App);
