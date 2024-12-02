import plugin from 'tailwindcss/plugin';

import { colors } from './tokens';

export const tailwindPlugin = plugin(
  ({ addBase, theme }) => {
    addBase({
      html: {
        color: theme('colors.grey.800'),
        backgroundColor: theme('colors.white'),
      },
      '*': {
        borderColor: theme('colors.grey.300'),
      },
      '.lucide': {
        strokeWidth: '1.5px',
      },
    });

  },
  {
    theme: {
      screens: {
        xs: '360px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      },
      extend: {
        colors: {
          base: {
            grey1: colors.base.grey1,
            grey2: colors.base.grey2,
            grey3: colors.base.grey3,
            grey4: colors.base.grey4,
            grey5: colors.base.grey5,
            grey6: colors.base.grey6,
          },
          feedback: {
            greenLight: colors.feedback.greenLight,
            greenDark: colors.feedback.greenDark,
            redLight: colors.feedback.redLight,
            redDark: colors.feedback.redDark,
          }
        },
        borderRadius: {
          xs: '2px',
          sm: '4px',
          md: '8px',
          pill: '999px',
        },
        fontSize: {
          xs: '12px',
          sm: '14px',
          h1: '24px',
          h2: '16px',
          score: '20px'
        },
        lineHeight: {
          near: '0%',
          compact: '30%',

        },
        fontWeight: {
          light: '300',
          regular: '500',
          bold: '700',
          black: '900',
        },
        borderWidth: {
          hairline: '0.5px',
          thin: '1px',
          thick: '2px',
          heavy: '3px'
        },
      },
    },
  },
);
