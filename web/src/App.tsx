import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import classes from './App.scss';

const App: React.FC = ({}) => {
  return (
    <div className={classes.container}>
      <ToastContainer position="top-center" />
      <header>
        <h1>Event Manager</h1>
      </header>
      <Outlet />
      <footer>©2023 Jan Feuerbach. All rights reserved.</footer>
    </div>
  );
};

export default App;
