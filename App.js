/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
import RouteStack from './src/route/RouteStack';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';



function App() {

  // constructor(props){
  //   super(props);

    

  //   this.checkPreviousSession();
  // }

  // async checkPreviousSession () {
  //   const didCrash = await Crashes.hasCrashedInLastSession();
  //   if(didCrash) {
  //     const report = await Crashes.lastSessionCrashReport();
  //     alert("Sorry about that crash, we're working on a solution");
  //   }
  // }
  

  return (
    <>
      <AuthProvider>
        <RouteStack />
      </AuthProvider>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
