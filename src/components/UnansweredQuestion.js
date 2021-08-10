import React, { Component } from "react"
import { connect } from "react-redux"
import {handleAddQuestionAnswer} from "../actions/questions"

class UnansweredQuestion extends Component {
    state ={
        answer : "optionOne"
    }
    onValueChange = (e) => {
        this.setState({
            answer: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {dispatch, authedUser, id} = this.props;
        const answer = this.state.answer;
        dispatch(handleAddQuestionAnswer(authedUser, id, answer));
    }
    render(){
        const {authorName, authorAvatar, optionOneText, optionTwoText} = this.props
        return(
           <div className="poll-question">
               <div className="question-author">
                   <p>{authorName} asks:</p>
               </div>
               <img
                      src={authorAvatar}
                      alt={`Avatar of ${authorName}`}
                      className="avatar"
                />
               <div className="question-option">
                    <p className="question-title">Would you rather</p>

                    <form onSubmit={this.handleSubmit}>
                        <div className="option">
                            <label>
                                <input
                                    type="radio"
                                    value="optionOne"
                                    checked={this.state.answer === "optionOne"}
                                    onChange={this.onValueChange}
                                />
                            {optionOneText}
                            </label>
                        </div>

                        <div className="option">
                            <label>
                                <input
                                    type="radio"
                                    value="optionTwo"
                                    checked={this.state.answer === "optionTwo"}
                                    onChange={this.onValueChange}
                                />
                            {optionTwoText}
                            </label>
                        </div>
                        <button type ="submit">Submit</button>
                    </form>            
               </div>
           </div> 
        )
    }
}

function mapStateToProps({users, questions, authedUser}, {id}){
    const authorId =  questions[id].author ;
    return {
        authorName: users[authorId].name,
        authorAvatar: users[authorId].avatarURL ,
        optionOneText: questions[id].optionOne.text,
        optionTwoText: questions[id].optionTwo.text,
        authedUser

    }
}

export default connect(mapStateToProps)(UnansweredQuestion)