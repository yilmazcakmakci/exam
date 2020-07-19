import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import reducer from './reducer'

const initialState = {
    name: '',
    questions: null,
    currentQuestion: 0,
}

export const Context = createContext()

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const value = { state, dispatch }
    return <Context.Provider value={value}>{children}</Context.Provider>
}

ContextProvider.defaultProps = {
    children: null,
}

ContextProvider.propTypes = {
    children: PropTypes.node,
}

export default ContextProvider
