import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF6347', // tomato
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4f46e5', // indigo-600
    },
    text: {
      primary: '#333333',
      secondary: '#6b7280',
    },
    background: {
      default: '#ffffff',
      paper: '#f8f9fa',
    },
  },
  typography: {
    fontFamily: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(',')
  },
})

export default theme
