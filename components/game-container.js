import React from 'react';
import { StyleSheet, View, Dimensions, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <View
            style={styles.box}
            onPress={() => {
              Alert.alert('You tapped the button!');
            }}
          />
          <View style={styles.box}/>
          <View style={styles.box}/>
          <View style={styles.box}/>
          <View style={styles.box}/>
          <View style={styles.box}/>
          <View style={styles.box}/>
          <View style={styles.box}/>
          <View style={styles.box}/>
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
  }
});
