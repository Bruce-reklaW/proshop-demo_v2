import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,
        RouterProvider,
        Route,
        createRoutesFromElements
      } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index={true} path='/' element={<HomeScreen/>}/>
    </Route>
) );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
