import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { routes } from 'navigation/routes';
import { AppDarkTheme, AppLightTheme } from 'navigation/theme';
import { useColorScheme } from 'react-native';

const Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined
};

function AppContainer() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme == 'light' ? AppLightTheme : AppDarkTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {routes.map(route => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={{
              presentation: route.presentation,
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;
