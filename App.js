import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GameContainer from './components/game-container';

export default class App extends React.Component {

  state = {
    timesPressed: 0,
    secondsPassed: 0
  }

  handlePress = () => {
    const currentTimesPressed = this.state.timesPressed + 1;
    this.setState({ timesPressed: currentTimesPressed });
  }

  handleTimerTick = () => {
    const currentSecondsPassed = this.state.secondsPassed + 1;
    this.setState({ secondsPassed: currentSecondsPassed });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Times Pressed: {this.state.timesPressed}</Text>
        <Text>Seconds Passed: {this.state.secondsPassed}</Text>
        <GameContainer
          handlePress={this.handlePress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
