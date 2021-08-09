import { showLoading, hideLoading } from "react-redux-loading"
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

export function handleAddQuestion(question){
    return (dispatch) => {
        dispatch(showLoading())

        return saveQuestion(question) // question = {optionOneText, optionTwoText, author}
        .then((question) => dispatch(addQuestion(question))) // after passing through saveQuestion(), saveQuestion() returns  question = formattedQuestion
        .then(() => dispatch(hideLoading()))
    }
}

function addQuestionAnswer(authedUser, qid, answer){
    return{
        type: ADD_QUESTION_ANSWER,
        authedUser,
        qid,
        answer,
    }
}

export function handleAddQuestionAnswer(authedUser, qid, answer){
    return (dispatch) => {
        dispatch(showLoading())

        return saveQuestionAnswer({ authedUser, qid, answer})
        .then(() => dispatch(addQuestionAnswer(authedUser, qid, answer)))
        .then(() => dispatch(hideLoading()))
    }
}
/*function handleAddQuestion(question){
    return (dispatch, getState) => {

    }
}*/