import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.box}/>
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
    backgroundColor: 'green'
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: 'red'
  }
});
