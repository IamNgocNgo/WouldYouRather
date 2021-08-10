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

class App extends Component {
    componentDidMount() {
      this.props.dispatch(handleInitialData())
    }
    render(){
        return (
            <div>
                <LoadingBar/>
                {this.props.loading === true? null :
                <SignIn/>}
                {/*<User id='tylermcginnis' rank={1}/> */}
            </div>
        )
    }
}

function mapStateToProps ({ questions }) {
    return {
      loading: questions === null
    }
  }

export default connect(mapStateToProps) (App);
