import { shuffle } from 'lodash'

function reducer(state, action) {
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.name,
            }
        case 'SET_QUESTIONS':
            const questions = action.questions.map((q) => ({
                question: q.question,
                correct_answer: q.correct_answer,
                options: shuffle([...Object.values(q.incorrect_answers), q.correct_answer]),
                answer: null,
            }))
            return {
                ...state,
                currentQuestion: 0,
                questions,
            }
        case 'SET_CURRENT_QUESTION':
            return {
                ...state,
                currentQuestion: action.currentQuestion,
            }
        case 'SET_ANSWER':
            state.questions[action.index].answer = action.answer
            return {
                ...state,
            }
        case 'RESET':
            return {
                name: '',
                questions: null,
                currentQuestion: 0,
            }
        default:
            return state
    }
}
export default reducer
