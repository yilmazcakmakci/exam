import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Context } from '../context/store'
import getData from '../helpers/getData'
import Exam from '../components/Exam'

const ExamContainer = () => {
    const { state, dispatch } = useContext(Context)
    const [isTimerOn, startTimer] = useState(false)
    const history = useHistory()

    useEffect(() => {
        getData('/').then((data) => {
            dispatch({
                type: 'SET_QUESTIONS',
                questions: Object.values(data.child('results').toJSON()),
            })
            startTimer(true)
        })
    }, [])

    const nextQuestion = () => {
        if (state.currentQuestion !== state.questions.length - 1) {
            dispatch({ type: 'SET_CURRENT_QUESTION', currentQuestion: state.currentQuestion + 1 })
        }
    }

    const prevQuestion = () => {
        if (state.currentQuestion > 0) {
            dispatch({ type: 'SET_CURRENT_QUESTION', currentQuestion: state.currentQuestion - 1 })
        }
    }

    const clearAnswer = (index) => {
        dispatch({ type: 'SET_ANSWER', answer: null, index })
    }

    const finishExam = () => {
        history.replace('/results')
    }

    if (state.name === '') history.replace('/')

    return (
        <Exam
            isTimerOn={isTimerOn}
            questions={state.questions}
            currentQuestion={state.currentQuestion}
            nextQuestion={nextQuestion}
            prevQuestion={prevQuestion}
            clearAnswer={clearAnswer}
            finishExam={finishExam}
        />
    )
}

export default ExamContainer
