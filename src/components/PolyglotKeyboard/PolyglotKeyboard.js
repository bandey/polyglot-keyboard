import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Keyboard from 'react-virtual-keyboard'; 

import keyboardLayout from './keyboardLayout.js';

import './PolyglotKeyboard.css';

class PolyglotKeyboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onInputAccepted = this.onInputAccepted.bind(this);
    this.onInputCancelled = this.onInputCancelled.bind(this);
  }  

  render() {
    if (!this.props.visible) {
      return null;
    }

    const name = this.props.name || 'keyboard';

    return (
      <Modal show={true} onHide={this.onInputCancelled}>
        <Modal.Body>
          <Keyboard 
            name={name}
            value={this.props.value}
            options={{
              appendLocally: true,
              alwaysOpen: true,
              type: "input",
              usePreview: false,
              useWheel: false,
              layout: keyboardLayout.name,
              customLayout: keyboardLayout.layout,
              display: keyboardLayout.display,
              color: "light",
              initialFocus: true,
              css: {
                container: 'text-center',
                input: 'form-control fontMedieval',
                buttonDefault: 'btn btn-light fontMedieval',
                buttonAction: 'btn-outline-info',
                // buttonHover: 'btn-dark',
                buttonActive: 'btn-outline-primary',
                // buttonEmpty: 'btn-outline-light',
                buttonDisabled: 'disabled',
              },
              beforeInsert: keyboardLayout.beforeInsert,
              updateOnChange: true,
              canceled: this.onInputCancelled,
            }}
            onChange={this.props.onChange}
            onAccepted={this.onInputAccepted}
          />
        </Modal.Body>
      </Modal>
    );
  }

  onInputAccepted(value) {
    this.props.onAction('accept', value);
  }

  onInputCancelled() {
    this.props.onAction('cancel');
  }
}

export default PolyglotKeyboard; 
