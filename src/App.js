import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import PostList from './components/PostList';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
    <Provider store={store}>
      <div className="App">
        <h1>GraphQL Posts UI</h1>
        <PostList />
      </div>
    </Provider>
    </ErrorBoundary>
  );
}

export default App;
