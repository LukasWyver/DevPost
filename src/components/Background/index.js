import React from 'react';
import {StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../styles/global/theme';

export default function Background({children}) {
  const {primary, primary_20} = theme.colors;

  return (
    <LinearGradient colors={[primary, primary_20]} style={styles.container}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
