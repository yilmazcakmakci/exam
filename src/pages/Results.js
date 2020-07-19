import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../context/store'
import Button from '../components/Button'
import Loading from '../components/Loading'
import saveData from '../helpers/saveData'
import calcResults from '../helpers/calculations'

const Results = () => {
    const { state, dispatch } = useContext(Context)
    const [results, setResults] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            setResults(Object.values(calcResults(state.questions)))
        }, 1500)
    })

    useEffect(() => {
        saveData(state.name, results)
    }, [state.name, results])

    if (state.questions === null) {
        window.location.href = '/'
    }

    const tryAgain = () => {
        dispatch({ type: 'RESET' })
    }

    return (
        <>
            {results ? (
                <div>
                    <p>
                        Congratulations <b>{state.name}</b>, your results is below.
                    </p>
                    <hr />
                    <div className="results">
                        {results.map((r) => (
                            <span key={r.label}>
                                {r.label} : {r.value}
                            </span>
                        ))}
                    </div>
                    <Button onClick={tryAgain}>TRY AGAIN</Button>
                </div>
            ) : (
                <>
                    <Loading />
                    <p style={{ textAlign: 'center' }}>Calculating...</p>
                </>
            )}
        </>
    )
}

export default Results
