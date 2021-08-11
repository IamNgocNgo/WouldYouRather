import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class PollQuestion extends Component {
    state = {
        toInfo: false
    }
    handleSubmit= (e) => {
        e.preventDefault();
        this.props.history.push(`/questions/${this.props.id}`)
    }
    render(){
        const {authorName, authorAvatar, optionOneText} = this.props
        return(
           <div className='poll-question'>
               <div className='question-author'>
                   <p>{authorName} asks:</p>
               </div>
               <img
                      src={authorAvatar}
                      alt={`Avatar of ${authorName}`}
                      className='avatar'
                />
               <div className='question-info'>
                    <p className='question-title'>Would you rather</p>
                    <p>...{optionOneText}...</p>
               </div>
                <button onClick={this.handleSubmit}>View Poll</button>
           </div> 
        )
    }
}

function mapStateToProps({users, questions}, {id}){
    const authorId =  questions[id].author ;
    return {
        authorName: users[authorId].name,
        authorAvatar: users[authorId].avatarURL ,
        optionOneText: questions[id].optionOne.text 
    }
}

export default withRouter(connect(mapStateToProps)(PollQuestion))