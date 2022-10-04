import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './fonts/Genera-Light.ttf'
import './fonts/Genera-SemiBold.ttf'
import './fonts/Aceh-Light.ttf'
import {ContextProvider} from './context/ContextProvider'
import {Application} from 'react-rainbow-components'
import {QueryClient, QueryClientProvider} from 'react-query'
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const theme = {
  rainbow: {
    palette: {
      brand: '#711aeb',
    },
  },
}
root.render(
  <QueryClientProvider client={queryClient}>
    <ContextProvider>
      <Application theme={theme}>
        <App />
      </Application>
    </ContextProvider>
  </QueryClientProvider>,
)
