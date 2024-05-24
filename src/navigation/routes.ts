import { RootStackParamList } from 'navigation/containers/App';
import HomeScreen from 'screens/home/Home';

import { Route } from 'types/route';

export const routes: Route<RootStackParamList>[] = [
  { name: 'Home', component: HomeScreen }
];
