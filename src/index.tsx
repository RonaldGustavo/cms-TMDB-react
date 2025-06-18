import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './app/App';
import { store, persistor } from './store';

import './assets/sass/style.scss';
import './assets/sass/style.react.scss';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { PersistGate } from 'redux-persist/integration/react';
config.autoAddCss = false;

library.add(fas);

// const { PUBLIC_URL } = import.meta.env;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    {/* <App basename={PUBLIC_URL} /> */}
  </Provider>,

  document.getElementById('root')
);
