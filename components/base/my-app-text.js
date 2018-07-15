'use strict';

import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Font } from 'expo';

export default class AppText extends Component {

  state = {
    loaded: false
  }

  constructor(props) {
    super(props);
    this.style = [{fontFamily: 'DosisExtraBold', fontSize: 10}];
    if( props.style ) {
      if( Array.isArray(props.style) ) {
        this.style = this.style.concat(props.style);
      } else {
        this.style.push(props.style);
      }
    }
  }

  async componentWillMount() {
    await Font.loadAsync({
      DosisExtraBold: require('../../assets/fonts/Dosis-ExtraBold.ttf')
    });
    this.setState({ ...this.state, loaded: true });
  }

  render() {
    return (
      <View>
        {this.state.loaded &&
          <Text {...this.props} style={this.style}>
            {this.props.children}
          </Text>
        }
      </View>
    );
  }
}
