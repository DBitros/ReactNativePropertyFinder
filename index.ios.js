/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

//Import like in swift
var React = require('react-native');
var SearchPage = require('./SearchPage');

class PropertyFinderApp extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}

var styles = React.StyleSheet.create({
  text: {
    color: 'green',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

React.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });