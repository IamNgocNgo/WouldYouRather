import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
    state = {
        defaultMode: true
    }
    handleUnansweredMode = (e) => {
        e.preventDefault();
        this.setState(() => ({
            defaultMode: true
        }))
    }

    handleAnsweredMode = (e) => {
        e.preventDefault();
        this.setState(() => ({
            defaultMode: false
        }))
    }
    render(){
        const {answeredQuestionIds, unansweredQuestionIds} = this.props
        return(
            <div>
                <button className='unanswered-question-button'
                        onClick={this.handleUnansweredMode}>
                            Unanswered Questions
                </button>

                <button className='answered-question-button'
                        onClick={this.handleAnsweredMode}>
                            Answered Questions
                </button>

                {this.state.defaultMode? 
                    <div> 
                        <p>Unanswered Question List</p>
                            <ul className='home-list'>
                                {unansweredQuestionIds.map((id) => (
                                    <p>{id}</p>
                                ))}
                            </ul>
                    </div> : 
                    <div>
                        <p>Answered Question List</p>
                            <ul className='home-list'>
                                {answeredQuestionIds.map((id) => (
                                    <p>{id}</p>
                                ))}
                            </ul>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps ({ questions, users, authedUser }) {
    const answeredQuestions = authedUser? users[authedUser].answers : {}
    
    const questionIds = Object.keys(questions);
    const answeredQuestionIds = Object.keys(answeredQuestions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    const unansweredQuestionIds  = questionIds.filter(id => !answeredQuestionIds.includes(id))
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp);
    return {
        answeredQuestionIds: answeredQuestionIds,
        unansweredQuestionIds: unansweredQuestionIds
    }
  }
  
  export default connect(mapStateToProps)(Home)