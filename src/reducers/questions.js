import { ADD_QUESTION_ANSWER, RECEIVE_QUESTIONS } from "../actions/questions";

export default function questions (state = {}, action){
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION_ANSWER:
            const {authedUser, qid, answer} = action

            let users1 = {}
            users1 = {
                ...state,
                [authedUser]:{
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                      }
                    
                }
            }
            //let users = {...state, user}

            let question = {
                ...state,
                [qid]:{
                    ...state[qid],
                    [answer]:{
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            }
            let questions = {...state, question}

            return{
                ...state,
                ...users1,
                //questions             
            }
        default: 
            return state
    }
}