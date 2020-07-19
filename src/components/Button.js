import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ type, onClick, children, disabled }) => {
    return (
        <button disabled={disabled} className={type} type="button" onClick={onClick}>
            {children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.oneOf(['primary', 'danger']),
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
}

Button.defaultProps = {
    type: 'primary',
    disabled: false,
    onClick: () => {},
}

export default Button
