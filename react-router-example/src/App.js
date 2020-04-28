import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <ul></ul>
      </div>
    </BrowserRouter>
  );
};

export default App;
