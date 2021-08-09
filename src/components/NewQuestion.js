import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const { author, dispatch } = this.props
        const optionOneText = this.optionOneText.value
        const optionTwoText = this.optionTwoText.value
        dispatch(handleAddQuestion({ optionOneText, optionTwoText, author}))
    }
    render(){
        return(
            <div className='new-question'>
                <p className='new-question-title'>Create New Question</p>
                <div>
                    <p style={{fontSize:'13px', marginLeft:'10px'}}>Complete the question:</p>
                    <p style={{fontSize:'20px', fontWeight:'bold', marginLeft:'20px'}}>Would you rather...</p>
                    <input 
                        type='text'
                        placeholder='Enter Question One Text Here'
                        ref={(input) => this.optionOneText = input}
                        className='new-question-input'/>
                    <p style={{textAlign:'center'}}>-----OR-----</p>
                    <input 
                        type='text'
                        placeholder='Enter Question Two Text Here'
                        ref={(input) => this.optionTwoText = input}
                        className='new-question-input'/>
                    <button 
                        className='submit-button'
                        onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser}){
    return{
        author: authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)