import React from 'react';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { convertInput } from '../AC/convertion';
import { clearInput, updateInput } from '../AC/input';
import { PHONE_BUTTONS } from '../const/phone';
import Button from './Button';

const App = props => {
    const renderPhoneButtons = () => {
        return PHONE_BUTTONS.map(button =>
            <Button
                disabled={button.disabled}
                key={uuid()}
                subtitle={button.subtitle}
                title={button.title}
                updateInput={props.updateInput}
                value={button.value}
            />
        );
    };

    return (
        <div className="container container--app">
            <input placeholder="Use dial to enter a number" type="text" value={props.input} />
            <div className="container container--buttons">
                <button onClick={props.clearInput}>Clear</button>
                <button onClick={props.convertInput}>Convert</button>
            </div>
            <div className="container container--dial">
                {renderPhoneButtons()}
            </div>
            <div className="output">{props.convertion}</div>
        </div>
    );
};

export default connect((state) => {
    const { input, convertion } = state;
    return {
        convertion,
        input
    }
}, {
    clearInput,
    convertInput,
    updateInput
})(App);
