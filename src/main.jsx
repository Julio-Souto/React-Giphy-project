import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import GiphyApp from './GiphyApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GiphyApp title="Buscador de Gifs"/>
  </React.StrictMode>,
)
