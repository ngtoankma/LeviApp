/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import Listview from './src/components/Listview.js';
import SideBar from './src/components/SideBar';
import Drawer from 'react-native-drawer';
import Asyncstorage from './src/components/Asyncstorage';
import TabBar from './src/components/TabBar';

export default class App extends Component {
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render() {
    return (
      <Drawer
      ref={(ref) => this._drawer = ref}
      openDrawerOffset={70}
      tapToClose={true}
      content={<View style={{flex:1,backgroundColor:'yellow'}}></View>}
      >
      <TouchableOpacity onPress={()=>{this.openControlPanel()}}><Text>open</Text></TouchableOpacity>
      <TabBar />
       </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
