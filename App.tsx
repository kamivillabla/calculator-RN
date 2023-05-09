/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {CalculatorScreen} from './src/screens/CalculatorScreen';
import {SafeAreaView, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const App = () => {
  return (
    <LinearGradient
      colors={['#FCEEEE', '#FCDCD9', '#FCC3C4']}
      style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        {/* Pone del mismo color la barra */}
        <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
        <CalculatorScreen />
      </SafeAreaView>
    </LinearGradient>
  );
};
