import { ADD_QUESTION, ADD_QUESTION_ANSWER } from '../actions/questions'
import { RECEIVE_USERS } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {

    case RECEIVE_USERS :
        return {
            ...state,
            ...action.users
        }

    case ADD_QUESTION:
        return{
            ...state,
            [action.question.author]: {
                ...state[action.question.author],
                questions: state[action.question.author].questions.concat([action.question.id])
            }
        }

    case ADD_QUESTION_ANSWER:
        const {authedUser, qid, answer} =  action
        let users = {
                ...state,
                [authedUser]:{
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                      }
                    
                }
            }
        return {
            ...state,
            ...users
        }

    default :
        return state
  }
}