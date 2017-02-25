'use strict';

import React from 'react';
import {
  asset,
  Mesh,
  Text,
  View,
  VrButton,
} from 'react-vr';

class Button extends React.Component {

  constructor(props) {
    super();

    this.state = {
      scrolling: false,
    }
  }

  _onButtonClicked() {
    this.props.onClick();
  }

  _onButtonEntered() {
    console.log('VrButton enter.');
  }

  _onButtonExit() {
    console.log('VrButton exit.');
  }

  _onButtonLongClick() {
    console.log('VrButton long click.');
  }

  render() {
    let alignment = this.props.alignment,
      translateX = -0.1;

    if (alignment === 'right') {
      translateX = 0.1;
    }

    return(
      <VrButton
        onClick={()=>this._onButtonClicked()}
        onEnter={()=>this._onButtonEntered()}
        onExit={()=>this._onButtonExit()}
        onLongClick={()=>this._onButtonLongClick()}
        style={{
          backgroundColor: 'red',
          width: 0.141,
          margin: 0.003,
        }} >
        <Text style={{
            fontSize: 0.015,
            paddingTop: 0.001,
            paddingBottom: 0.0025,
            paddingLeft: 0.005,
            paddingRight: 0.005,
            textAlign: 'center',
            textAlignVertical: 'center',
          }} >Scroll {this.props.alignment}</Text>
      </VrButton>
    );
  }
}

module.exports = Button;
