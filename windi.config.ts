import { defineConfig } from 'vite-plugin-windicss'
import colors from 'windicss/colors'
import plugin from 'windicss/plugin'
import typography from 'windicss/plugin/typography'

const primaryColor = "#e72528";

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              'color': 'inherit',
              'opacity': 0.75,
              'fontWeight': '500',
              'textDecoration': 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
    },
  },
  plugins: [
    typography(),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.test-color': {
          backgroundColor: primaryColor,
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)',
        },
      }
      addUtilities(newUtilities)
    }),
  ]
})
