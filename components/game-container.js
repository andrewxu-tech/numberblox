import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Text } from 'react-native';

export default class App extends React.Component {

  state = {
    currentSquares: [],
    pressed: true,
    gameOver: false
  }

  generateRandomSquares = () => {
    this.setState({...this.state, currentSquares: [ Math.floor(Math.random() * 10) ]});
  }

  componentDidMount = () => {
    this.generateRandomSquares();
  }

  render() {
    return (
      <View>
        <Text>{this.state.gameOver}</Text>
        <Text>{this.state.currentSquares}</Text>
        <View style={styles.container}>
          {[...Array(9)].map((e, i) => {
            return <Text className="busterCards" key={i}>j</Text>;
          })}
          {this.state.currentSquare === 0 &&
            <TouchableOpacity
              style={styles.specialBox}
              onPress={() => {
                this.props.handlePress();
                this.setState({ ...this.state, pressed: true });
              }}
            />
          }
          {this.state.currentSquare !== 0 &&
            <View
              style={styles.box}
            />
          }
          {this.state.currentSquare === 1 &&
            <TouchableOpacity
              style={styles.specialBox}
              onPress={() => {
                this.props.handlePress();
                this.setState({ ...this.state, pressed: true });
              }}
            />
          }
          {this.state.currentSquare !== 1 &&
            <View
              style={styles.box}
            />
          }
          {this.state.currentSquare === 2 &&
            <TouchableOpacity
              style={styles.specialBox}
              onPress={() => {
                this.props.handlePress();
                this.setState({ ...this.state, pressed: true });
              }}
            />
          }
          {this.state.currentSquare !== 2 &&
            <View
              style={styles.box}
            />
          }
          {this.state.currentSquare === 3 &&
            <TouchableOpacity
              style={styles.specialBox}
              onPress={() => {
                this.props.handlePress();
                this.setState({ ...this.state, pressed: true });
              }}
            />
          }
          {this.state.currentSquare !== 3 &&
            <View
              style={styles.box}
            />
          }
          {this.state.currentSquare === 4 &&
            <TouchableOpacity
              style={styles.specialBox}
              onPress={() => {
                this.props.handlePress();
                this.setState({ ...this.state, pressed: true });
              }}
            />
          }
          {this.state.currentSquare !== 4 &&
            <View
              style={styles.box}
            />
          }
          {this.state.currentSquare === 5 &&
            <TouchableOpacity
              style={styles.specialBox}
              onPress={() => {
                this.props.handlePress();
                this.setState({ ...this.state, pressed: true });
              }}
            />
          }
          {this.state.currentSquare !== 5 &&
            <View
              style={styles.box}
            />
          }
          {this.state.currentSquare === 6 &&
            <TouchableOpacity
              style={styles.specialBox}
              onPress={() => {
                this.props.handlePress();
                this.setState({ ...this.state, pressed: true });
              }}
            />
          }
          {this.state.currentSquare !== 6 &&
            <View
              style={styles.box}
            />
          }
          {this.state.currentSquare === 7 &&
            <TouchableOpacity
              style={styles.specialBox}
              onPress={() => {
                this.props.handlePress();
                this.setState({ ...this.state, pressed: true });
              }}
            />
          }
          {this.state.currentSquare !== 7 &&
            <View
              style={styles.box}
            />
          }
          {this.state.currentSquare === 8 &&
            <TouchableOpacity
              style={styles.specialBox}
              onPress={() => {
                this.props.handlePress();
                this.setState({ ...this.state, pressed: true });
              }}
            />
          }
          {this.state.currentSquare !== 8 &&
            <View
              style={styles.box}
            />
          }
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
