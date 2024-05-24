import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';

export const AppLightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    background: '#FFFFFF',
    primary: '#C7F064',
    card: '#F1F5E8',
    text: '#000000',
    border: '#4F4F4F',
    notification: '#4F0000'
  }
};

export const AppDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    background: '#252728',
    primary: '#536724',
    card: '#0A0814',
    text: '#FFFFFF',
    border: '#FFFFFF',
    notification: '#FF0000'
  }
};
