 // src/ReduxProvider.js
'use client';

import { Provider } from 'react-redux';
import store from '../store';

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ReduxProvider;


/* wrapped the whole app in the ReduxProvider component. 
This component takes a single prop called children, which is a special prop 
that React uses to render the content inside the component. 
Inside the ReduxProvider component, we use the Provider component from 
the react-redux library to provide the Redux store to the entire app. 
The Provider component takes a store prop, which is set to the store object 
we imported from the store.js file. 
This ensures that the Redux store is available to all components in the app. */