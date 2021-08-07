import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Home from './Home'
import LoadingBar from 'react-redux-loading'

class App extends Component {
    componentDidMount() {
      this.props.dispatch(handleInitialData())
    }
    render(){
        return (
            <div>
                <LoadingBar/>
                <Home />
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
