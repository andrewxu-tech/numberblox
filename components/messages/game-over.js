import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';

import Text from '../base/my-app-text';

export default class GameOver extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.gameOverText}>Game Over</Text>
          <TouchableOpacity
            style={styles.button}
            title="Retry"
            onPress={() => {}}
          >
            <Text style={styles.buttonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width,
    zIndex: 1,
    display: 'flex',
    alignItems: 'center'
  },
  modal: {
    width: Dimensions.get('window').width * 0.8,
    backgroundColor: '#FF9800',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 30,
    padding: 30
  },
  gameOverText: {
    fontSize: 48,
    color: 'white'
  },
  button: {
    backgroundColor: '#ffcb7f',
    borderRadius: 30,
    padding: 15,
    marginTop: 30
  },
  buttonText: {
    fontSize: 36
  }
});
