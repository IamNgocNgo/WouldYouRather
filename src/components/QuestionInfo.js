import React, { Component } from 'react'
import ResultQuestion from './ResultQuestion'
import UnansweredQuestion from './UnansweredQuestion'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

class QuestionInfo extends Component {
    
    render(){
        const {question_id, answerIds, questionIds} = this.props
        return(
            <div>
                {!questionIds.includes(question_id)? <Redirect to='/404'/>
                :
                (answerIds.includes(question_id)?
                    <ResultQuestion id={question_id}/>
                    : 
                    <UnansweredQuestion id={question_id}/>)}
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, props){
    const {question_id} = props? props.match.params: null
    const answers = users[authedUser].answers
    return({
        question_id,
        answerIds: Object.keys(answers),
        questionIds: Object.keys(questions)
    })
}

export default withRouter(connect(mapStateToProps)(QuestionInfo))