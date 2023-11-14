import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Firebase/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
  <HelmetProvider>
  <RouterProvider router={router} />
  </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
