const defaultTheme  = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      'sans': 'Spartan, sans-serif'
    },
    extend: {
      padding: {
        ...defaultTheme.padding,
        "18": "4.5rem"
      },
      width: {
        ...defaultTheme.width,
        "mobile-menu": "100vw",
        "menu": "103px",
        "menu-logo": "103px",
        "mobile-menu-logo": "80px"
      },
      height: {
        ...defaultTheme.height,
        "mobile-menu": "80px",
        "menu": "100vh",
        "menu-logo": "103px",
        "mobile-menu-logo": "80px"
      },
      textColor: {
        ...defaultTheme.textColor,
        white: "#fff",
        base: "var(--color-text-base)",
        "primary": "var(--color-text-primary)",
        "primary-muted": "var(--color-text-primary-muted)",
        "primary-button-muted": "var(--color-text-primary-button-muted)",
        label: "var(--color-text-label)",
        muted: "var(--color-text-muted)",
        inverted: "var(--color-text-inverted)",
        success: "var(--color-text-success)",
        warning: "var(--color-text-warning)",
        draft: "var(--color-text-draft)",
        input: "var(--color-input-text)",
        "input-muted": "var(--color-input-text-muted)",
        "icon-primary": "var(--color-icon-primary)"
      },
      backgroundColor: {
        ...defaultTheme.backgroundColor,
        page: "var(--color-bg-page)",
        fill: "var(--color-bg-fill)",
        primary: "var(--color-bg-primary)",
        "primary-hover": "var(--color-primary-hover)",
        "button-primary": "var(--color-button-primary)",
        "button-primary-hover": "var(--color-button-primary-hover)",
        "button-primary-muted": "var(--color-button-primary-muted)",
        "button-primary-muted-hover": "var(--color-button-primary-muted-hover)",
        "button-success": "var(--color-button-success)",
        "success": "var(--color-bg-success)",
        "warning": "var(--color-bg-warning)",
        "draft": "var(--color-bg-draft)",
        "button-warning": "var(--color-button-warning)",
        "button-draft": "var(--color-button-draft)",
        "button-draft-hover": "var(--color-button-draft-hover)",
        "button-danger": "var(--color-button-danger)",
        icon: "var(--color-icon)",
        checkbox: "var(--color-checkbox)",
        "checkbox-checked": "var(--color-checkbox-checked)",
        "divider": "var(--color-divider)"
      },
      borderColor: {
        ...defaultTheme.borderColor,
        primary: "var(--color-bg-primary)"
      }
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/forms")
  ]
}
