import React, { Component } from 'react'
import { connect } from 'react-redux'
import Progress from 'react-progressbar'

class ResultQuestion extends Component {
    render(){
        const {authorName, authorAvatar, question, authedUser} = this.props;
        console.log(`HERE: ${question.optionOne.votes.length}`)
        const voteOptionOne = question.optionOne.votes.length;
        const voteOptionTwo = question.optioneTwo.votes.length;
        const totalVotes = voteOptionOne + voteOptionTwo;
        const percent1 = Math.round(voteOptionOne*100/totalVotes);
        const percent2 = Math.round(voteOptionTwo*100/totalVotes);
        return(
            <div>
            <div className='poll-question'>
               <div className='question-author'>
                   <p>{authorName} asks:</p>
               </div>
               <img
                      src={authorAvatar}
                      alt={`Avatar of ${authorName}`}
                      className='avatar'
                />
                <div>
                    <p>Results:</p>
                    <div className="option-result">
                        <p>Would you rather {question.optionOne.text}</p>
                        <Progress className="progress-bar" completed={percent1}>{percent1}</Progress>
                        
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

function mapStateToProps({users, questions, authedUser}, {id}){
    const authorId = questions[id].author;
    return {
        authorName: users[authorId].name,
        authorAvatar: users[authorId].avatarURL,
        question: questions[id],
        authedUser
    }
}
export default connect(mapStateToProps) (ResultQuestion)