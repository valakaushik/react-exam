import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import store from "./redux/store.js";
import store from "./redax/store.js"
// import { Provider } from "react-redux";
import { Provider } from 'react-redux'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
    <App store={store} />

    </Provider>
    
  </React.StrictMode>,
)


