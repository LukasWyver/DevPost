import React from 'react';
import {ActivityIndicator} from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import Background from '../components/Background';
import theme from '../styles/global/theme';

function Routes() {
  const signed = false;
  const loading = false;

  if (loading) {
    <Background>
      <ActivityIndicator color={theme.colors.light} size={50} />
    </Background>;
  }
  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
