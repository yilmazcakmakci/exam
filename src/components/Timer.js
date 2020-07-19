import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Timer = ({ finishExam, isTimerOn }) => {
    const [counter, setCounter] = useState(60)

    useEffect(() => {
        if (!isTimerOn) return
        if (counter === 0) finishExam()

        const interval = setInterval(() => setCounter(counter - 1), 1000)

        // eslint-disable-next-line consistent-return
        return () => clearInterval(interval)
    }, [counter, isTimerOn, finishExam])

    return <span className={counter <= 10 ? 'scaled' : ''}>{counter}</span>
}

Timer.propTypes = {
    finishExam: PropTypes.func.isRequired,
    isTimerOn: PropTypes.bool.isRequired,
}

export default Timer
