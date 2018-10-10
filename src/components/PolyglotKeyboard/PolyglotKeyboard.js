import React from 'react';

import Modal from 'react-bootstrap/lib/Modal';
import Keyboard from 'react-virtual-keyboard'; 

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
              layout: 'custom',
              customLayout: {
                'normal': [
                  '{accept} {cancel} {meta-lat} {meta-gre}',
                ],
                'meta-lat' : [ // Latin lower case
                  '{accept} {cancel} {meta-lat} {meta-gre}',
                  '{alt} {shift} {bksp} {space} a b c d e f g h i j k l m n o p q r s t u w v x y z',
                ],
                'meta-lat-shift' : [ // Latin upper case
                  '{accept} {cancel} {meta-lat} {meta-gre}',
                  '{alt} {shift} {bksp} {space} A B C D E F G H I J K L M N O P Q R S T U W V X Y Z',
                ],
                'meta-lat-alt' : [ // Latin punctuation, digits and symbols part 1
                  '{accept} {cancel} {meta-lat} {meta-gre}',
                  '{alt} {shift} {bksp} {space} \u2014 ` 1 2 3 4 5 6 7 8 9 0 - = / \\ [ ] , . ; \' \u2018 \u2019',
                ],
                'meta-lat-alt-shift' : [ // Latin punctuation, digits and symbols part 2
                  '{accept} {cancel} {meta-lat} {meta-gre}',
                  '{alt} {shift} {bksp} {space} \u2116 ~ ! @ # $ % ^ & * ( ) _ + ? | { } < > : " \u201c \u201d \u00ab \u00bb',
                ],
                'meta-gre' : [ // Greek lower case
                  '{accept} {cancel} {meta-lat} {meta-gre}',
                  '{shift} {bksp} {space} \u03b1 \u03b2 \u03b3 \u03b4 \u03b5 \u03b6 \u03b7 \u03b8 \u03b9 \u03ba \u03bb \u03bc \u03bd \u03be \u03bf \u03c0 \u03c1 \u03c2 \u03c3 \u03c4 \u03c5 \u03c6 \u03c7 \u03c8 \u03c9',
                ],
                'meta-gre-shift' : [ // Greek upper case
                  '{accept} {cancel} {meta-lat} {meta-gre}',
                  '{shift} {bksp} {space} \u0391 \u0392 \u0393 \u0394 \u0395 \u0396 \u0397 \u0398 \u0399 \u039a \u039b \u039c \u039d \u039e \u039f \u03a0 \u03a1 \u03a3 \u03a4 \u03a5 \u03a6 \u03a7 \u03a8 \u03a9',
                ],
              },
              display: {
                "meta-lat": "Lat",
                "meta-gre": "Gre",
              },
              color: "light",
              initialFocus: true,
              css: {
                container: 'text-center',
                input: 'form-control fontMedieval',
                buttonDefault: 'btn btn-default fontMedieval',
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
