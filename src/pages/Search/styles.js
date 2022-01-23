import styled from 'styled-components';
import theme from '../../styles/global/theme';

export const Background = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.secondary_10};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: white;
`;
