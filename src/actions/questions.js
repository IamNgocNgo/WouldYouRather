import { saveQuestion, saveQuestionAnswer } from "../utils/api"
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question,
    }
}

function addQuestionAnswer({ authedUser, qid, answer}){
    return{
        type: ADD_QUESTION_ANSWER,
        authedUser,
        qid,
        answer,
    }
}

/*function handleAddQuestion(question){
    return (dispatch, getState) => {

    }
}*/