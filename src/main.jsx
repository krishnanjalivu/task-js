import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import process from 'process'


import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={process.env.REACT_KEY}>
 <BrowserRouter>

  <App />
 
  </BrowserRouter>
  </GoogleOAuthProvider>,
)
