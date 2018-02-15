import React from 'react';
import { connect } from 'react-redux';
import { updateInput } from '../AC/input';
import { PHONE_BUTTONS } from '../const/phone';
import Button from './Button';

const App = props => {
    const renderPhoneButtons = () => {
        return PHONE_BUTTONS.map(button =>
            <Button
                disabled={button.disabled}
                subtitle={button.subtitle}
                title={button.title}
                updateInput={props.updateInput}
                value={button.value}
            />
        );
    };

    return (
        <div className="container container--app">
            <form className="container">
                <input type="text" value={props.input} />
                <input type="submit" value="Convert" />
            </form>
            <div className="output">
                Output comes here
            </div>
            <div className="container container--dial">
                {renderPhoneButtons()}
            </div>
        </div>
    );
};

export default connect(({ input }) => ({ input }), { updateInput })(App);
