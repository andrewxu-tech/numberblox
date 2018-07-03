import React from 'react';
import { StyleSheet, View, Dimensions, Alert, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity
            style={StyleSheet.flatten([styles.box, { backgroundColor: 'green' }])}
            onPress={this.props.handlePress}
          />
          <TouchableOpacity
            style={StyleSheet.flatten([styles.box, { backgroundColor: 'green' }])}
            onPress={this.props.handlePress}
          />
          <TouchableOpacity
            style={StyleSheet.flatten([styles.box, { backgroundColor: 'green' }])}
            onPress={this.props.handlePress}
          />
          <TouchableOpacity
            style={StyleSheet.flatten([styles.box, { backgroundColor: 'green' }])}
            onPress={this.props.handlePress}
          />
          <TouchableOpacity
            style={StyleSheet.flatten([styles.box, { backgroundColor: 'green' }])}
            onPress={this.props.handlePress}
          />
          <TouchableOpacity
            style={StyleSheet.flatten([styles.box, { backgroundColor: 'green' }])}
            onPress={this.props.handlePress}
          />
          <TouchableOpacity
            style={StyleSheet.flatten([styles.box, { backgroundColor: 'green' }])}
            onPress={this.props.handlePress}
          />
          <TouchableOpacity
            style={StyleSheet.flatten([styles.box, { backgroundColor: 'green' }])}
            onPress={this.props.handlePress}
          />
          <TouchableOpacity
            style={StyleSheet.flatten([styles.box, { backgroundColor: 'green' }])}
            onPress={this.props.handlePress}
          />
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
