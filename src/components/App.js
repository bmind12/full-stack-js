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
            <input type="text" value={props.input} />
            <div className="container">
                <button onClucx={props.queryConvertion}>Convert</button>
                <button onClick={props.clearInput}>Clear</button>
            </div>
            <div className="container container--dial">
                {renderPhoneButtons()}
            </div>
            <div className="output">
                Output comes here
            </div>
        </div>
    );
};

export default connect(({ input }) => ({ input }), {
    clearInput,
    convertInput,
    updateInput
})(App);
