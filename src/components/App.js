import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Home from './Home'
import LoadingBar from 'react-redux-loading'
import PollQuestion from './PollQuestion';
import UnansweredQuestion from './UnansweredQuestion';
import ResultQuestion from './ResultQuestion';

class App extends Component {
    componentDidMount() {
      this.props.dispatch(handleInitialData())
    }
    render(){
        return (
            <div>
                <LoadingBar/>
                {this.props.loading === true? null :
                <ResultQuestion id="6ni6ok3ym7mf1p33lnez"/> }
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
