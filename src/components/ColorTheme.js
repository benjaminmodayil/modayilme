import React, { Component } from 'react'

let themes = [
  { main: '#1D252C', accent: '#F7484E' },
  { main: '#3E363F', accent: '#16C172' },
  { main: '#646165', accent: '#9CAEA9' },
  { main: '#F1BF98', accent: '#8F5C38' }
]

let theme1 = themes[0]
let theme2 = themes[1]
let theme3 = themes[2]
let theme4 = themes[3]

var theme1Main = { backgroundColor: theme1.main }
var theme1Accent = { backgroundColor: theme1.accent }
var theme2Main = { backgroundColor: theme2.main }
var theme2Accent = { backgroundColor: theme2.accent }
var theme3Main = { backgroundColor: theme3.main }
var theme3Accent = { backgroundColor: theme3.accent }
var theme4Main = { backgroundColor: theme4.main }
var theme4Accent = { backgroundColor: theme4.accent }

class ColorTheme extends Component {
  render() {
    let getData = e => {
      let chosen = e.currentTarget.dataset.color

      switch (chosen) {
        case 'theme1':
          document.documentElement.style.setProperty('--red', theme1.main)
          document.documentElement.style.setProperty('--bg', theme1.accent)
          break

        case 'theme2':
          document.documentElement.style.setProperty('--red', theme2.main)
          document.documentElement.style.setProperty('--bg', theme2.accent)
          break

        case 'theme3':
          document.documentElement.style.setProperty('--red', theme3.main)
          document.documentElement.style.setProperty('--bg', theme3.accent)
          break

        case 'theme4':
          document.documentElement.style.setProperty('--red', theme4.main)
          document.documentElement.style.setProperty('--bg', theme4.accent)
          break

        default:
          break
      }
    }

    return (
      <div className="color-theme">
        <div className="color-theme__set" data-color="theme1" onClick={getData}>
          <span className="color-theme__set__main" style={theme1Main} />
          <span className="color-theme__set__accent" style={theme1Accent} />
        </div>
        <div className="color-theme__set" data-color="theme2" onClick={getData}>
          <span className="color-theme__set__main" style={theme2Main} />
          <span className="color-theme__set__accent" style={theme2Accent} />
        </div>
        <div className="color-theme__set" data-color="theme3" onClick={getData}>
          <span className="color-theme__set__main" style={theme3Main} />
          <span className="color-theme__set__accent" style={theme3Accent} />
        </div>
        <div className="color-theme__set" data-color="theme4" onClick={getData}>
          <span className="color-theme__set__main" style={theme4Main} />
          <span className="color-theme__set__accent" style={theme4Accent} />
        </div>
      </div>
    )
  }
}

export default ColorTheme
