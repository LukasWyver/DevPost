import React from 'react';
import {Background, Title} from './styles';
import LogoSvg from '../../assets/login.svg';

export default function Home() {
  return (
    <Background>
      <LogoSvg />
      <Title>Tela de Home</Title>
    </Background>
  );
}
