import { buttonRecipe } from '@/app/common/components/Button/Button.recipe';
import { defineConfig, defineLayerStyles, defineTextStyles } from '@pandacss/dev';

const layerStyles = defineLayerStyles({
  container: {
    description: 'container styles',
    value: {
      bg: { value: { color: 'black.400' } },
      border: '2px solid',
      borderColor: 'blue.500',
      padding: 'lg',
      borderRadius: 'sm',
      boxShadow: 'accent',
    },
  },
});

const textStyles = defineTextStyles({
  h1: {
    description: 'title text style',
    value: {
      fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: '6xl',
      letterSpacing: '0',
      textDecoration: 'None',
      textTransform: 'None',
    },
  },
});

export default defineConfig({
  // https://panda-css.com/docs/concepts/writing-styles#global-styles
  globalCss: {
    body: {
      margin: 0,
      padding: 0,
    },
  },
  strictTokens: true,
  // Whether to use css reset
  preflight: true,
  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  theme: {
    textStyles,
    layerStyles,
    tokens: {
      colors: {
        blue: {
          100: { value: '#caf0f8' },
          200: { value: '#90e0ef' },
          300: { value: '#00b4d8' },
          400: { value: '#0077b6' },
          500: { value: '#03045e' },
        },
        black: {
          100: { value: '#e0e1dd' },
          200: { value: '#778da9' },
          300: { value: '#415a77' },
          400: { value: '#0d1b2a' },
        },
      },
      spacing: {
        xs: { value: '4px' },
        sm: { value: '8px' },
        md: { value: '12px' },
        lg: { value: '16px' },
        xl: { value: '24px' },
        '2xl': { value: '32px' },
      },
      fontSizes: {
        xs: { value: '12px' },
        sm: { value: '14px' },
        md: { value: '16px' },
        lg: { value: '18px' },
        xl: { value: '20px' },
        '2xl': { value: '24px' },
        '3xl': { value: '28px' },
        '4xl': { value: '32px' },
        '5xl': { value: '36px' },
        '6xl': { value: '40px' },
      },
      radii: {
        0: { value: '0' },
        xs: { value: '4px' },
        sm: { value: '8px' },
        md: { value: '12px' },
        full: { value: '50%' },
      },
      shadows: {
        subtle: { value: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' },
        accent: {
          value: {
            offsetX: 0,
            offsetY: 4,
            blur: 4,
            spread: 0,
            color: 'rgba(0, 0, 0, 0.1)',
          },
        },
        realistic: {
          value: ['0 1px 2px 0 rgba(0, 0, 0, 0.05)', '0 1px 4px 0 rgba(0, 0, 0, 0.1)'],
        },
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          value: '{colors.blue.300}',
        },
        secondary: {
          value: '{colors.black.300}',
        },
      },
    },
    recipes: {
      buttonRecipe,
    },
  },
  staticCss: {
    recipes: {
      buttonRecipe: [{ size: ['*'] }, { visual: ['*'] }, { color: ['*'] }],
    },
  },
  outdir: 'styled-system',
  jsxFramework: 'react',
});
