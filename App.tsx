import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import AppContainer from './src/navigation/containers/App';

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
