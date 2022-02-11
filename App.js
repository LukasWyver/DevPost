import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './src/routes';
import theme from './src/styles/global/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
