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
        <div className={`button ${disabled && ' button--disabled'}`} onClick={handleClick}>
            <span className="button__title">{title}</span>
            <span className="button__subtitle">{subtitle}</span>
        </div>
    )
}

export default Button;
