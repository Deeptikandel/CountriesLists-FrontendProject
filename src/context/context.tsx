import React from 'react'

export const themes = {
  primary: {
    color: 'Red',
    code: '#800080',
  },
  secondary: {
    color: 'Green',
    code: '#008000',
  },
  third: {
    color: 'Blue',
    code: '#0000FF',
  },
  fourth: {
    color: 'Black',
    code: '#000000',
  },
}

export const ThemeContext = React.createContext({
  colorTheme: themes.primary,
  switchTheme: (newTheme: { color: string; code: string }) => {},
})
