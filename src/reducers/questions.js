import { ADD_QUESTION, ADD_QUESTION_ANSWER, RECEIVE_QUESTIONS } from "../actions/questions";

export default function questions (state = {}, action){
    switch(action.type){

        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }

        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            } 
                       
        case ADD_QUESTION_ANSWER:
            const {authedUser, qid, answer} = action

            let questions = {
                ...state,
                [qid]:{
                    ...state[qid],
                    [answer]:{
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            }

            return{
                ...state,
                ...questions             
            }

        default: 
            return state
    }
}