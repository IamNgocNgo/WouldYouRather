import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollQuestion from './PollQuestion';

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
            <div className='home-button'>
                <button onClick={this.handleUnansweredMode}
                        style={{color: this.state.defaultMode? 'blue':'black'}}>
                            Unanswered Questions
                </button>

                <button onClick={this.handleAnsweredMode}
                        style={{color: this.state.defaultMode? 'black':'blue'}}>
                            Answered Questions
                </button>

                {this.state.defaultMode? 
                    <div> 
                        <ul className='home-list'>
                            {(unansweredQuestionIds.length === 0)?
                                <p>You have answered all the question.
                                    Please create new questions or come back later.
                                </p>
                                :
                                (unansweredQuestionIds.map((id) => (
                                    <li key={id}><PollQuestion id={id}/></li>
                                )))
                            }
                        </ul>
                    </div> 
                    : 
                    <div>
                        <ul className='home-list'>
                            {(answeredQuestionIds.length === 0)? 
                                <p>You haven't answered any question yet.</p>
                                : 
                                (answeredQuestionIds.map((id) => (
                                    <li key={id}><PollQuestion id={id}/></li>)))
                            }
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