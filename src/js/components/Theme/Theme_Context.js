import React from 'react'

const themes = {
  dark: {
    backgroundColor: '#212121',
    color: 'white',
    oppositeBG: '#fffcfc',
    oppositeColor: '#212121',
    btnImg:'url(../../../resources/icons/dark_mode/sun.svg)',
    msg:'Light Mode',
    cardBorder:'none'
  },
  light: {
    backgroundColor: '#fffcfc',
    color: '#212121',
    oppositeBG: '#212121',
    oppositeColor: 'white',
    btnImg:'url(../../../resources/icons/dark_mode/moon2.svg)',
    msg:'Dark Mode',
    cardBorder:'1px solid #212121'
  }
}

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {}
}
const ThemeContext = React.createContext(initialState)

function ThemeProvider({ children }) {
  const [dark, setDark] = React.useState(false) // Default theme is light

  // On mount, read the preferred theme from the persistence
  React.useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true'
    setDark(isDark)
  }, [dark])

  // To toggle between dark and light modes
  const toggle = () => {
    const isDark = !dark
    localStorage.setItem('dark', JSON.stringify(isDark))
    setDark(isDark);
    console.log('clicked');
  }

  const theme = dark ? themes.dark : themes.light

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
