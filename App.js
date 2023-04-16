import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { AppLoading } from 'expo-app-loading';
import * as Font from 'expo-font';
import Navigator from './navigate';


export default class App extends Component {
  state = {
    loaded: false
  };

  _loadFontsAsync = async () => {
    await Font.loadAsync({
      'noto-sans': require('./assets/fonts/NotoSansThai-VariableFont_wdth,wght.ttf'),
    });
    this.setState({ loaded: true });
  };

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.loaded) {
      return null; // or you can return a loading indicator here
    }
    
    return (
      <Navigator />
    );
  }
}
