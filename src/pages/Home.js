/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Context } from '../context/store'
import Button from '../components/Button'

const Home = () => {
    const { dispatch } = useContext(Context)
    const [name, setName] = useState('')
    const [error, setError] = useState(null)
    const history = useHistory()

    const changeName = () => {
        if (name.length > 0 && name.charAt(0) !== ' ') {
            dispatch({ type: 'SET_NAME', name })
            history.replace('/exam')
        } else {
            setError('Please enter a valid name.')
        }
    }

    return (
        <div className="home">
            <p>Welcome, please enter your name.</p>
            <input
                placeholder="Your name"
                className="name-input"
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
            />

            {error && <span>{error}</span>}

            <Button onClick={() => changeName()}>START EXAM</Button>

            <ul style={{ marginTop: '2rem' }}>
                <li>
                    After clicking <b>Start Exam</b> button you will have 1 minute to answer
                    questions.
                </li>
                <li>Questions you don't answer will be considered blank.</li>
                <li>Each 3 wrong answers eliminate 1 correct answer.</li>
            </ul>
        </div>
    )
}

export default Home
