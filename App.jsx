import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ActivityIndicator, FlatList } from 'react-native';
import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/HomeScreen';
import ResultScreen from './src/ResultScreen';


const StackNavigator = createStackNavigator({
  HomeScreen:   HomeScreen,
  ResultScreen:  ResultScreen
}, {
  initialRouteName: "HomeScreen"
})

export default createAppContainer(StackNavigator)