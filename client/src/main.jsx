import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@lanaco/lnc-react-ui";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={"Lanaco Light"}>
          <App />
      </ThemeProvider>
  </React.StrictMode>,
)
