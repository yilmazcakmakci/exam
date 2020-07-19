import React, { useContext } from 'react'
import PropTypes from 'prop-types'
// import { shuffle } from 'lodash'
import { Context } from '../context/store'

const Question = ({ q, index }) => {
    const { question, options } = q
    const { dispatch } = useContext(Context)
    return (
        <div className="fade-in">
            <p>{question}</p>
            {options.map((a, i) => (
                <label key={i} htmlFor={i} className={`answer ${q.answer === a && 'checked'}`}>
                    <span>{a}</span>
                    <input
                        style={{ opacity: '0' }}
                        id={i}
                        type="radio"
                        checked={q.answer === a}
                        onChange={(e) =>
                            dispatch({ type: 'SET_ANSWER', answer: e.target.value, index })
                        }
                        value={a}
                    />
                </label>
            ))}
        </div>
    )
}

Question.propTypes = {
    q: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
}

export default Question
