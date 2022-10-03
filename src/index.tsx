import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './fonts/Genera-Light.ttf'
import './fonts/Genera-SemiBold.ttf'
import './fonts/Aceh-Light.ttf'
import {ContextProvider} from './context/ContextProvider'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)
