import React from 'react';

import Keyboard from 'react-virtual-keyboard'; 

class PolyglotKeyboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {input: 'initial'};
    this.onInputChanged = this.onInputChanged.bind(this);
    this.onInputAccepted = this.onInputAccepted.bind(this);
    this.onInputCancelled = this.onInputCancelled.bind(this);
  }  

  render() {
    return (
      <Keyboard 
        value={this.state.input}
        name='keyboard'
        options={{
          appendLocally: true,
          alwaysOpen: true,
          type: "input",
          usePreview: false,
          useWheel: false,
          layout: "qwerty",
          color: "light",
          initialFocus: true,
          updateOnChange: true,
          canceled: this.onInputCancelled,
        }}
        onChange={this.onInputChanged}
        onAccepted={this.onInputAccepted}
      />
    );
  }

  onInputChanged(value) {
    this.setState({input: value});
  }

  onInputAccepted(value) {
    console.log("Input accepted:", value);
  }

  onInputCancelled() {
    console.log("Input cancelled");
  }
}

export default PolyglotKeyboard; 
