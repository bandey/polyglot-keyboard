import React from 'react';

import PolyglotKeyboard from '../PolyglotKeyboard/PolyglotKeyboard.js'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyboardValue: 'initial',
    };
    this.onKeyboardChange = this.onKeyboardChange.bind(this);
    this.onKeyboardAction = this.onKeyboardAction.bind(this);
  }  

  render() {
    return (
      <PolyglotKeyboard 
        value={this.state.keyboardValue}
        onChange={this.onKeyboardChange}
        onAction={this.onKeyboardAction}
      />
    );
  }

  onKeyboardChange(value) {
    this.setState({keyboardValue: value});
  }

  onKeyboardAction(action, value) {
    if (action === 'accept') {
      console.log("Input accepted:", value);
    } else {
      console.log("Input cancelled");
    }
  }
};

export default App; 
