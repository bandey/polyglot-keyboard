import React from 'react';

import PolyglotKeyboard from '../PolyglotKeyboard/PolyglotKeyboard.js'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'text1', 
        'text2', 
        'text3',
      ],
      isKeyboardVisible: false,
      keyboardItemIndex: 0,
      keyboardValue: '',
    };
    this.toggleKeyboardVisibility = this.toggleKeyboardVisibility.bind(this);
    this.onKeyboardChange = this.onKeyboardChange.bind(this);
    this.onKeyboardAction = this.onKeyboardAction.bind(this);
  }  

  render() {
    let itemsBlock = this.state.items.map((item, index) => {
      return (
        <div key={'item' + index}>
          <button onClick={() => {this.toggleKeyboardVisibility(index)}}>
            Modify
          </button>
          &nbsp;
          {item}
        </div>
      );
    });

    return (
      <React.Fragment>
        {itemsBlock}
        <PolyglotKeyboard
          visible={this.state.isKeyboardVisible} 
          value={this.state.keyboardValue}
          onChange={this.onKeyboardChange}
          onAction={this.onKeyboardAction}
        />
      </React.Fragment>
    );
  }

  toggleKeyboardVisibility(index) {
    this.setState((prevState) => {
      return { 
        isKeyboardVisible: !prevState.isKeyboardVisible,
        keyboardItemIndex: index,
        keyboardValue: prevState.items[index],
      };
    });
  }

  onKeyboardChange(value) {
    this.setState({keyboardValue: value});
  }

  onKeyboardAction(action, value) {
    if (action === 'accept') {
      console.log("Input accepted:", value);
      this.setState((prevState) => {
        let items = [...prevState.items];
        items[prevState.keyboardItemIndex] = value;
        return {isKeyboardVisible: false, items: items};
      });
    } else {
      console.log("Input cancelled");
      this.setState({isKeyboardVisible: false});
    }
  }
};

export default App; 
