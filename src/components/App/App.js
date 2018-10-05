import React from 'react';

import PolyglotKeyboard from '../PolyglotKeyboard/PolyglotKeyboard.js'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appValue: 'initial',
      isKeyboardVisible: false,
      keyboardValue: '',
    };
    this.toggleKeyboardVisibility = this.toggleKeyboardVisibility.bind(this);
    this.onKeyboardChange = this.onKeyboardChange.bind(this);
    this.onKeyboardAction = this.onKeyboardAction.bind(this);
  }  

  render() {
    return (
      <React.Fragment>
        <button onClick={this.toggleKeyboardVisibility}>Toggle</button>
        <span>{this.state.appValue}</span>
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
        keyboardValue: prevState.appValue,
      };
    });
  }

  onKeyboardChange(value) {
    this.setState({keyboardValue: value});
  }

  onKeyboardAction(action, value) {
    if (action === 'accept') {
      console.log("Input accepted:", value);
      this.setState({isKeyboardVisible: false, appValue: value});
    } else {
      console.log("Input cancelled");
      this.setState({isKeyboardVisible: false});
    }
  }
};

export default App; 
