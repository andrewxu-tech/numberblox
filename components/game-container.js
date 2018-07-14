import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Text } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {

  state = {
    currentSquares: [],
    pressed: true,
    gameOver: false,
    loaded: false
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
    this.setState({...this.state, currentSquares: newCurrentSquares });
  }

  timer = () => {
    setInterval(() => {
      this.generateRandomSquares(3);
    }, 1500);
  }

  async componentWillMount() {
    await Font.loadAsync({
      DosisExtraBold: require('../assets/fonts/Dosis-ExtraBold.ttf')
    });
    this.setState({ ...this.state, loaded: true });
  }

  componentDidMount = () => {
    this.generateRandomSquares(3);
    this.timer();
  }

  render() {
    return (
      <View>
        {this.state.loaded &&
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
        }
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
    borderRadius: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  specialBoxText: {
    fontSize: 72,
    fontFamily: 'DosisExtraBold'
  }
});
