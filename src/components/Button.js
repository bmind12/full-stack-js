import React from 'react';

const Button = props => {
    const { title, subtitle } = props;

    return (
        <div>
            <span>{title}</span>
            <span>{subtitle}</span>
        </div>
    )
}

export default Button;
