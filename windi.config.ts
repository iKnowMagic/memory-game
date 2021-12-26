import colors from 'windicss/colors'
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extend: {
    theme: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1440px'
      },
      colors: {
        gray: colors.gray,
        dark: colors.dark
      },
      fontSize: {
        base: '18px',
        h1: '48px',
        h2: '32px',
        h3: '20px',
        'game-sm': '44px',
        'game-lg': '56px'
      }
    }
  }
})
