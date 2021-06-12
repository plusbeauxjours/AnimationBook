import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';

import Transitions from './src/Transitions';

import StyleGuide from './src/components/StyleGuide';

enableScreens();

const fonts = {
  'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
};

const assets = [];

const Stack = createStackNavigator();
const AppNavigator = () => (
  <React.Fragment>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: StyleGuide.palette.primary,
          borderBottomWidth: 0,
        },
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="Transitions"
        component={Transitions}
        options={{
          title: 'Transitions',
        }}
      />
    </Stack.Navigator>
  </React.Fragment>
);

const App = () => (
  <React.Fragment>
    <StatusBar barStyle="light-content" />
    <AppNavigator />
  </React.Fragment>
);

export default App;
