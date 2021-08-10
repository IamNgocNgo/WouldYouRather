import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'
class LeaderBoard extends Component {
    render(){
        return(
            <div>
                {this.props.userIds.map((id,index) => (
                    <li key={index}>
                        <User id={id} rank={index+1}/>
                    </li>
                ))}
            </div>
        )
    }
}

function mapsStateToProps({users}){
    return({
        userIds: Object.keys(users)
        .sort((a,b) => 
            (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length))
    })
}

export default connect(mapsStateToProps)(LeaderBoard)