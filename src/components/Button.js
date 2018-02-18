import React from 'react';

const Button = props => {
    const {
        disabled,
        subtitle,
        title,
        updateInput,
        value
    } = props;

    const handleClick = () => {
        disabled || updateInput(value);
    }

    return (
        <div className={`dial-button ${disabled && ' dial-button--disabled'}`} onClick={handleClick}>
            <span className="dial-button__title">{title}</span>
            <span className="dial-button__subtitle">{subtitle}</span>
        </div>
    )
}

export default Button;
