// Colors
const color = {
  white: '#fff',
  black: '#000',
  light: '#f0f0f0',
  dark: '#2f2f2f',
  orange: '#e65c00',
  yellow: '#f9d423',
  blackTransparent: 'rgba(0,0,0,.75)',
  whiteTransparent: 'rgba(255,255,255,.75)'
}
color.sunsetGradient = `linear-gradient(180deg, ${color.orange} 0%, ${color.yellow} 100%)`;

// Fonts
const font = {
  family: {
    default: "'opensans', arial, sans-serif",
    bold: "'opensansblack', arial, sans-serif",
    brand: "'cinzeldecorative', arial, sans-serif"
  }
}

export {
  color,
  font
};