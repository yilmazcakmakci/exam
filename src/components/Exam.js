import React from 'react'
import PropTypes from 'prop-types'
import Question from './Question'
import { ReactComponent as Right } from '../icons/right.svg'
import { ReactComponent as Left } from '../icons/left.svg'
import Button from './Button'
import Loading from './Loading'
import Timer from './Timer'

const Exam = ({
    isTimerOn,
    questions,
    currentQuestion,
    nextQuestion,
    prevQuestion,
    clearAnswer,
    finishExam,
}) => {
    if (questions === null) {
        return <Loading />
    }

    return (
        <>
            <div className="exam-header">
                <span>{`${currentQuestion + 1}/${questions.length}`}</span>
                <Timer finishExam={finishExam} isTimerOn={isTimerOn} />
            </div>
            <hr />

            <Question q={questions[currentQuestion]} index={currentQuestion} />

            <div className="button-group">
                <Button onClick={prevQuestion} disabled={currentQuestion < 1}>
                    <Left />
                </Button>
                <Button type="danger" onClick={() => clearAnswer(currentQuestion)}>
                    Clear
                </Button>
                <Button onClick={nextQuestion} disabled={currentQuestion === questions.length - 1}>
                    <Right />
                </Button>
            </div>

            {currentQuestion === questions.length - 1 && (
                <Button type="danger" onClick={finishExam}>
                    Finish Exam
                </Button>
            )}
        </>
    )
}

Exam.propTypes = {
    isTimerOn: PropTypes.bool.isRequired,
    questions: PropTypes.array,
    currentQuestion: PropTypes.number.isRequired,
    nextQuestion: PropTypes.func.isRequired,
    prevQuestion: PropTypes.func.isRequired,
    clearAnswer: PropTypes.func.isRequired,
    finishExam: PropTypes.func.isRequired,
}

Exam.defaultProps = {
    questions: null,
}

export default Exam
