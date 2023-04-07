import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import "./App.css"
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<BrowserRouter>
<App />
</BrowserRouter>
 
 
)
