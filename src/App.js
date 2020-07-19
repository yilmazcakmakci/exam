import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import ExamContainer from './pages/Exam'
import Results from './pages/Results'
import ContextProvider from './context/store'

function App() {
    return (
        <ContextProvider>
            <Router>
                <div className="container">
                    <h2 className="logo">Exam</h2>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/exam" component={ExamContainer} />
                    <Route exact path="/results" component={Results} />
                </div>
            </Router>
        </ContextProvider>
    )
}

export default App
