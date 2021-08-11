import React, { Component } from 'react'
import ResultQuestion from './ResultQuestion'
import UnansweredQuestion from './UnansweredQuestion'
import { connect } from 'react-redux'

class QuestionInfo extends Component {
    render(){
        const {question_id, answerIds} = this.props
        return(
            <div>
                {answerIds.includes(question_id)?
                    <ResultQuestion id={question_id}/>
                    : 
                    <UnansweredQuestion id={question_id}/>}
            </div>
        )
    }
}

function mapStateToProps({authedUser, users}, props){
    const {question_id} = props.match.params
    const answers = users[authedUser].answers
    return({
        question_id,
        answerIds: Object.keys(answers)
    })
}

export default connect(mapStateToProps)(QuestionInfo)