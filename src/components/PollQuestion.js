import React, { Component } from 'react'
import { connect } from 'react-redux'

class PollQuestion extends Component {
    render(){
        const {authorName, authorAvatar, optionOneText} = this.props
        return(
           <div className='question'>
               <div>
                   <p>{authorName} asks:</p>
               </div>
               <div>
                   <img
                      src={authorAvatar}
                      alt={`Avatar of ${authorName}`}
                      className='avatar'
                   />
                   <div className='question-info'>
                        <p>Would you rather</p>
                        <p>...{optionOneText}...</p>
                   </div>
               </div>
           </div> 
        )
    }
}

function mapStateToProps({users, questions}, {id}){
    //console.log(   `HERE: ${questions[id]}`)
    //questions? console.log(questions): console.log(' Not yet');
    const authorId =  questions? questions[id].author : null;
    //const authorId  =  question.author;
    return {
        authorName: users[authorId].name,
        authorAvatar: users[authorId].avatarURL ,
        optionOneText: questions[id].optionOne.text 
    }
}

export default connect(mapStateToProps)(PollQuestion)