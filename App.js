import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Font } from 'expo';

import Text from './components/base/my-app-text';

import GameContainer from './components/game-container';

export default class App extends React.Component {

  state = {
    timesPressed: 0,
    secondsPassed: 0,
    loaded: false
  }

  handlePress = () => {
    const currentTimesPressed = this.state.timesPressed + 1;
    this.setState({ timesPressed: currentTimesPressed });
  }

  handleTimerTick = () => {
    const currentSecondsPassed = this.state.secondsPassed + 1;
    this.setState({ secondsPassed: currentSecondsPassed });
  }

  clearScore = () => {
    this.setState({ timesPressed: 0 });
  }

  async componentWillMount() {
    await Font.loadAsync({
      DosisExtraBold: require('./assets/fonts/Dosis-ExtraBold.ttf')
    });
    this.setState({ ...this.state, loaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.scoreText}>
          {this.state.timesPressed}
        </Text>
        <GameContainer
          handlePress={this.handlePress}
          handleTimerTick={this.handleTimerTick}
          clearScore={this.clearScore}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9800',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scoreText: {
    fontSize: 72,
    color: 'white'
  }
});
