import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';

import Text from './base/my-app-text';

export default class App extends React.Component {

  state = {
    numberOfSquares: 3,
    currentSquares: [],
    gameOver: false,
    currentSquaresPressed: [],
    timerOn: true,
    ticker: 1
  }

  generateRandomSquares = (numberOfSquares) => {
    const newCurrentSquares = [];
    [...Array(numberOfSquares)].forEach(() => {
      let newNumber = Math.floor(Math.random() * 9);
      while (newCurrentSquares.includes(newNumber)) {
        newNumber = Math.floor(Math.random() * 9);
      }
      newCurrentSquares.push(newNumber);
    });
    this.setState({ ...this.state, currentSquares: newCurrentSquares });
  }

  ticker = () => {
    setInterval(() => {
      this.timer();
      this.setState({ ...this.state, ticker: this.state.ticker + 1 });
    }, 1000/60);
  }

  timer = () => {
    if (!(this.state.ticker % 90)) {
      const newCurrentSquaresPressed = this.state.currentSquaresPressed;
      if (this.state.currentSquaresPressed.length < this.state.numberOfSquares
        || newCurrentSquaresPressed[newCurrentSquaresPressed.length-2] !== newCurrentSquaresPressed[newCurrentSquaresPressed.length-1] - 1
      ) {
        this.setState({ ...this.state, timerOn: false });
        return this.gameOver();
      } else if (this.state.timerOn) {
        this.generateRandomSquares(this.state.numberOfSquares);
        return this.setState({ ...this.state, currentSquaresPressed: [] });
      }
    }
  }

  gameOver = () => {
    this.setState({ ...this.state, gameOver: true });
  }

  handlePress = (pressedSquare) => {
    const newCurrentSquaresPressed = this.state.currentSquaresPressed;
    newCurrentSquaresPressed.push(pressedSquare);
    if (newCurrentSquaresPressed.length === 1 && pressedSquare !== 0) {
      this.setState({ ...this.state, timerOn: false });
      return this.gameOver();
    }
    if (pressedSquare !== 0 && newCurrentSquaresPressed[newCurrentSquaresPressed.length-2] !== newCurrentSquaresPressed[newCurrentSquaresPressed.length-1] - 1) {
      return this.gameOver();
    }
    return this.setState({ ...this.state, currentSquaresPressed: newCurrentSquaresPressed });
  }

  componentDidMount = () => {
    this.generateRandomSquares(this.state.numberOfSquares);
    this.ticker();
  }

  render() {
    return (
      <View>
        {this.state.gameOver && <Text>Game Over!</Text>}
        <View style={styles.container}>
          {[...Array(9)].map((e, i) => {
            return <View key={i}>
              {this.state.currentSquares.includes(i) &&
                <TouchableOpacity
                  style={styles.specialBox}
                  onPress={() => {
                    if (!this.state.gameOver) {
                      this.props.handlePress();
                    }
                    this.handlePress(this.state.currentSquares.indexOf(i));
                  }}
                >
                  <Text style={styles.specialBoxText}>
                    {this.state.currentSquares.indexOf(i) + 1}
                  </Text>
                </TouchableOpacity>
              }
              {!this.state.currentSquares.includes(i) &&
                <View
                  style={styles.box}
                />
              }
            </View>;
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').width + 50,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingTop: 20,
    backgroundColor: '#c7ff75',
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderColor: '#7ACC00'
  },
  box: {
    height: (Dimensions.get('window').width / 3) - 10,
    width: (Dimensions.get('window').width / 3) - 10,
    backgroundColor: '#7ACC00',
    marginBottom: 10,
    borderRadius: 30,
    borderWidth: 10,
    borderColor: '#7ACC00'
  },
  specialBox: {
    height: (Dimensions.get('window').width / 3) - 10,
    width: (Dimensions.get('window').width / 3) - 10,
    backgroundColor: '#e5ffc1',
    marginBottom: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: '#7ACC00'
  },
  specialBoxText: {
    fontSize: 72,
    color: '#7ACC00'
  }
});
