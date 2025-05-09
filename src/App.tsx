import './App.css'

import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import { router } from './routes';
import { HelmetProvider, Helmet } from 'react-helmet-async';

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | Delivery DBV' />
      <RouterProvider router={router} />
    </HelmetProvider>
  )}