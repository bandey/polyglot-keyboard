import React from 'react';

import Modal from 'react-bootstrap/lib/Modal';
import Keyboard from 'react-virtual-keyboard'; 

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

    return (
      <Modal show={true} onHide={this.onInputCancelled}>
        <Modal.Body>
          <Keyboard 
            name='keyboard'
            value={this.props.value}
            options={{
              appendLocally: true,
              alwaysOpen: true,
              type: "input",
              usePreview: false,
              useWheel: false,
              layout: "qwerty",
              color: "light",
              initialFocus: true,
              css: {
                container: 'text-center',
                input: 'form-control',
                buttonDefault: 'btn btn-default',
                buttonAction: 'btn-info',
                // buttonHover: 'btn-secondary',
                buttonActive: 'btn-primary',
                buttonDisabled: 'disabled',
              },
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
