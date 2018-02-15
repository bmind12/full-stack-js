import React, { PureComponent } from 'react';
import { PHONE_BUTTONS } from '../const/phone';
import Button from './Button';

class App extends PureComponent {
    state = {
        input: ''
    }

    updateInput = (value) => {
        this.setState({
            input: this.state.input + value
        });
    }

    renderPhoneButtons = () => {
        return PHONE_BUTTONS.map(button => 
            <Button
                disabled={button.disabled}
                subtitle={button.subtitle}
                title={button.title}
                updateInput={this.updateInput}
                value={button.value}
            />
        );
    }

    render() {
        return (
            <div className="container">
                <input type="text"/>
                {this.renderPhoneButtons()}
            </div>
        );
    }
}

export default App;
