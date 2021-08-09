import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Home from './Home'
import LoadingBar from 'react-redux-loading'
import PollQuestion from './PollQuestion';
import UnansweredQuestion from './UnansweredQuestion';
import ResultQuestion from './ResultQuestion';
import User from './User'

class App extends Component {
    componentDidMount() {
      this.props.dispatch(handleInitialData())
    }
    render(){
        return (
            <div>
                <LoadingBar/>
                {this.props.loading === true? null :
                <User id='tylermcginnis' rank={1}/> }
            </div>
        )
    }
}

function mapStateToProps ({ authedUser }) {
    return {
      loading: authedUser === null
    }
  }

export default connect(mapStateToProps) (App);
