import React from 'react';

const Button = props => {
    const { title, subtitle } = props;

    return (
        <div className="button">
            <span className="button__title">{title}</span>
            <span className="button__subtitle">{subtitle}</span>
        </div>
    )
}

export default Button;
