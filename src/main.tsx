import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { createTheme, CssBaseline } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'dark', // Set the palette mode to dark
    primary: {
      main: '#1E88E5', // Dark blue
      light: '#6AB7FF',
      dark: '#005CB2',
    },
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />

    </ThemeProvider>
  </React.StrictMode>,
)
