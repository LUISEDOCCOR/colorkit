import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource-variable/dm-sans';
import { Analytics } from "@vercel/analytics/react"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Analytics/>
    <App />
  </React.StrictMode>,
)
