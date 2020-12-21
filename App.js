/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler'

import React from 'react';
import {StatusBar} from 'react-native';

// import HomeScreen from './src/screens/Home'
// import SearchResultsScreen from './src/screens/SearchResults'
// import DestinationSearchScreen from './src/screens/DestinationSearch'
// import GuestsScreen from './src/screens/Guests'
// import Post from './src/components/Post'

import Router from './src/navigation/Router';
// import feed from './assets/data/feed'
const App: () => React$Node = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router/>
        
    </>
  );
};


export default App;
