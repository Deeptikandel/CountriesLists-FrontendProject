import React, { useState } from 'react'
import Routes from './Routes'

import { ThemeContext, themes } from './context/context'

export default function App() {
  const [context, setContext] = useState({
    colorTheme: themes.primary,
    switchTheme: (newTheme: { color: string; code: string }) => {
      setContext((current) => ({
        ...current,
        colorTheme: newTheme,
      }))
    },
  })
  return (
    <ThemeContext.Provider value={context}>
      <div className="App">
        <Routes />
      </div>
    </ThemeContext.Provider>
  )
}
