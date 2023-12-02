/** @type {import('tailwindcss').Config} */
module.exports = {
  fontFamily: {
    sans: ["--typography--font-family--sans"],
    serif: ["--typography--font-family--serif"],
    mono: ["--typography--font-family--mono"],
  },
  fontSize: {
    "7xl": ["--typography--font-size--display-large"],
    "6xl": ["--typography--font-size--display-medium"],
    "5xl": ["--typography--font-size--display-small"],
    "4xl": ["--typography--font-size--headline-large"],
    "3xl": ["--typography--font-size--headline-medium"],
    "2xl": ["--typography--font-size--headline-small"],
    xl: ["--typography--font-size--title-large"],
    lg: ["--typography--font-size--body-large"],
    base: ["--typography--font-size--body-medium"],
    sm: ["--typography--font-size--body-small"],
    xs: ["--typography--font-size--label-small"],
  },
  letterSpacing: {
    tightest: ["--typography--letter-spacing--display-large"],
    tighter: ["--typography--letter-spacing--title-small"],
    tight: ["--typography--letter-spacing--title-medium"],
    normal: ["--typography--letter-spacing--body-medium"],
    wide: ["--typography--letter-spacing--body-small"],
    wider: ["--typography--letter-spacing--body-small"],
    widest: ["--typography--letter-spacing--body-large"],
  },
  lineHeight: {
    loose: ["--typography--line-height--title-large"],
    relaxed: ["--typography--line-height--title-medium"],
    normal: ["--typography--line-height--body-medium"],
    tight: ["--typography--line-height--label-medium"],
    snug: ["--typography--line-height--label-small"],
  },
  screens: {
    xs: ["--layout--screen-xs"],
    sm: ["--layout--screen-sm"],
    md: ["--layout--screen-md"],
    lg: ["--layout--screen-lg"],
    xl: ["--layout--screen-xl"],
  },
  colors: {
    primary: "var(--swatch--primary)",
    "on-primary": "var(--swatch--on-primary)",
    "primary-container": "var(--swatch--primary-container)",
    "on-primary-container": "var(--swatch--on-primary-container)",
    "primary-fixed": "var(--swatch--primary-fixed)",
    "primary-fixed-dim": "var(--swatch--primary-fixed-dim)",
    "on-primary-fixed": "var(--swatch--on-primary-fixed)",
    "on-primary-fixed": "var(--swatch--on-primary-fixed)",
    secondary: "var(--swatch--secondary)",
    "on-secondary": "var(--swatch--on-secondary)",
    "secondary-container": "var(--swatch--secondary-container)",
    "on-secondary-container": "var(--swatch--on-secondary-container)",
    "secondary-fixed": "var(--swatch--secondary-fixed)",
    "secondary-fixed-dim": "var(--swatch--secondary-fixed-dim)",
    "on-secondary-fixed": "var(--swatch--on-secondary-fixed)",
    "on-secondary-fixed": "var(--swatch--on-secondary-fixed)",
    tertiary: "var(--swatch--tertiary)",
    "on-tertiary": "var(--swatch--on-tertiary)",
    "tertiary-container": "var(--swatch--tertiary-container)",
    "on-tertiary-container": "var(--swatch--on-tertiary-container)",
    error: "var(--swatch--error)",
    "on-error": "var(--swatch--on-error)",
    "error-container": "var(--swatch--error-container)",
    "on-error-container": "var(--swatch--on-error-container)",
    "error-fixed": "var(--swatch--error-fixed)",
    "error-fixed-dim": "var(--swatch--error-fixed-dim)",
    "on-error-fixed": "var(--swatch--on-error-fixed)",
    "on-error-fixed": "var(--swatch--on-error-fixed)",
    "surface-dim": "var(--swatch--surface-dim)",
    surface: "var(--swatch--surface)",
    "surface-bright": "var(--swatch--surface-bright)",
    "surface-container-lowest": "var(--swatch--surface-container-lowest)",
    "surface-container-low": "var(--swatch--surface-container-low)",
    "surface-container": "var(--swatch--surface-container)",
    "surface-container-highest": "var(--swatch--surface-container-highest)",
    "surface-container-high": "var(--swatch--surface-container-high)",
    "on-surface": "var(--swatch--on-surface)",
    "on-surface-variant": "var(--swatch--on-surface-variant)",
    outline: "var(--swatch--outline)",
    "outline-variant": "var(--swatch--outline-variant)",
    "inverse-surface": "var(--swatch--inverse-surface)",
    "inverse-on-surface": "var(--swatch--inverse-on-surface)",
    "inverse-primary": "var(--swatch--inverse-primary)",
    scrim: "var(--swatch--scrim)",
    shadow: "var(--swatch--shadow)",
  },
  // TODO: spacing
};
