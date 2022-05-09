import React from 'react'
import Routes from './Routes'
import { createTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'

const theme = createTheme({
  // palette: {
  //   primary: {
  //     // main: themeColor,
  //     dark: '#f09c01',
  //   },
  //   secondary: {
  //     main: '#11cb5f',
  //   },
  //   text: {
  //     primary: '#373585',
  //     secondary: '#a4a6b3',
  //   },
  //   background: { default: '#f7f8fc' },
  // },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  )
}
