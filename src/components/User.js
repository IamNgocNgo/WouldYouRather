import React, { Component } from 'react'
import { connect }  from 'react-redux'

class  User extends Component {
    render(){
        const {user, rank} = this.props
        const numAnswered = Object.keys(user.answers).length
        const numCreated = user.questions.length
        const score = numAnswered + numCreated
        
        return(
            <div className='user'>
                <p style={{ fontSize: "15px", color: 'blue'}}>Rank #{rank}</p>
                <p style={{ fontSize: "30px", fontWeight: 'bold' }}>{user.name}</p>
                <p style={{ fontSize: "20px", fontWeight: 'bold' }}>Score</p>
                <img
                      src={user.avatarURL}
                      alt={`Avatar of ${user.avatarURL}`}
                      className="avatar"
                />
                <div className='user-score'>
                    <p style={{border: "1px solid"}}> Answered questions</p>
                    <p style={{border: "1px solid", textAlign: "center"}}>{numAnswered}</p>
                    <p style={{border: "1px solid"}}>Created questions</p>
                    <p style={{border: "1px solid", textAlign: "center"}}>{numCreated}</p>
                </div>
                <p style={{ fontSize: "40px", color: "blue", textAlign:  "-moz-initial"}}>{score}</p>
            </div>
        )
    }
}

function mapStateToProps({users}, {id}){
    return{
        user: users[id]
    }
}

export default connect(mapStateToProps)(User)