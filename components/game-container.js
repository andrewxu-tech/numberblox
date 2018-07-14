import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Text } from 'react-native';

export default class App extends React.Component {

  state = {
    currentSquares: [],
    pressed: true,
    gameOver: false
  }

  generateRandomSquares = (numberOfSquares) => {
    const newCurrentSquares = [];
    [...Array(numberOfSquares)].forEach(() => {
      newCurrentSquares.push(Math.floor(Math.random() * 10));
    });
    this.setState({...this.state, currentSquares: newCurrentSquares });
  }

  componentDidMount = () => {
    this.generateRandomSquares(3);
  }

  render() {
    return (
      <View>
        <Text>{this.state.gameOver}</Text>
        <Text>{this.state.currentSquares}</Text>
        <View style={styles.container}>
          {[...Array(9)].map((e, i) => {
            return <View key={i}>
              {this.state.currentSquares.includes(i) &&
                <TouchableOpacity
                  style={styles.specialBox}
                  onPress={() => {
                    this.props.handlePress();
                    this.setState({ ...this.state, pressed: true });
                  }}
                />
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
    height: 500,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingTop: 10
  },
  box: {
    height: (Dimensions.get('window').width / 3) - 10,
    width: (Dimensions.get('window').width / 3) - 10,
    backgroundColor: 'red',
    marginBottom: 10,
    borderRadius: 15
  },
  specialBox: {
    height: (Dimensions.get('window').width / 3) - 10,
    width: (Dimensions.get('window').width / 3) - 10,
    backgroundColor: 'green',
    marginBottom: 10,
    borderRadius: 15
  }
});
