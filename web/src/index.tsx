import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import 'reflect-metadata';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { HomePage } from '@app/pages/home/HomePage';
import { EventPage, loader as eventLoader } from '@app/pages/event/EventPage';

import App from './App';

import './index.scss';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'events/:eventId',
        element: <EventPage />,
        loader: eventLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <RouterProvider router={router} />
  </LocalizationProvider>,
);
