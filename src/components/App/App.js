import React from 'react';

import PolyglotKeyboard from '../PolyglotKeyboard/PolyglotKeyboard.js'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isKeyboardVisible: false,
      keyboardValue: 'initial',
    };
    this.toggleKeyboardVisibility = this.toggleKeyboardVisibility.bind(this);
    this.onKeyboardChange = this.onKeyboardChange.bind(this);
    this.onKeyboardAction = this.onKeyboardAction.bind(this);
  }  

  render() {
    return (
      <React.Fragment>
        <button onClick={this.toggleKeyboardVisibility}>Toggle</button>
        <PolyglotKeyboard
          visible={this.state.isKeyboardVisible} 
          value={this.state.keyboardValue}
          onChange={this.onKeyboardChange}
          onAction={this.onKeyboardAction}
        />
      </React.Fragment>
    );
  }

  toggleKeyboardVisibility() {
    this.setState((prevState) => {
      return { 
        isKeyboardVisible: !prevState.isKeyboardVisible,
      };
    });
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
