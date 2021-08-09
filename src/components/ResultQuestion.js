import React, { Component } from 'react'
import { connect } from 'react-redux'
import Progress from 'react-progressbar'
import { HiOutlineCheckCircle } from "react-icons/hi";

class ResultQuestion extends Component {
    render(){
        const {authorName, authorAvatar, question, authedUser} = this.props;
        
        const voteOptionOne = question.optionOne.votes.length;
        const voteOptionTwo = question.optionTwo.votes.length;
        const totalVotes = voteOptionOne + voteOptionTwo;
        const percent1 = Math.round(voteOptionOne*100/totalVotes);
        const percent2 = Math.round(voteOptionTwo*100/totalVotes);

        return(
            <div>
            <div className='result'>
               <div className='question-author'>
                   <p>{authorName} asks:</p>
               </div>
               <img
                      src={authorAvatar}
                      alt={`Avatar of ${authorName}`}
                      className='avatar'
                />
                <div className='result-text'>
                    <p>Results:</p>
                    <div className="result-option">
                        <p>Would you rather {question.optionOne.text}</p>
                        <div className="result-progress">
                            <Progress className="progress-bar" completed={percent1}>{percent1}%</Progress>
                            <p>{voteOptionOne} out of {totalVotes} votes</p>
                            {question.optionOne.votes.includes(authedUser) && <HiOutlineCheckCircle color='#f82626'/>}
                        </div>
                    </div>

                    <div className="result-option">
                        <p>Would you rather {question.optionTwo.text}</p>
                        <div className="result-progress">
                            <Progress className="progress-bar" completed={percent2}>{percent2}%</Progress>
                            <p>{voteOptionTwo} out of {totalVotes} votes</p>
                            {question.optionTwo.votes.includes(authedUser) && <HiOutlineCheckCircle color='#f82626'/>}
                        </div>
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