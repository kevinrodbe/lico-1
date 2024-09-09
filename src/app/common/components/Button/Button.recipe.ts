import { defineRecipe } from '@pandacss/dev';

export const buttonRecipe = defineRecipe({
  className: 'button',
  description: 'The styles for the Button component',
  base: {
    display: 'flex',
    borderRadius: 'sm',
  },
  variants: {
    visual: {
      funky: { bg: 'blue.500', color: '[white]' },
      edgy: { border: '1px solid {colors.blue.300}' },
    },
    size: {
      sm: { padding: 'sm', fontSize: 'sm' },
      lg: { padding: 'lg', fontSize: 'md' },
      xl: { padding: 'xl', fontSize: 'lg' },
      '2xl': { padding: '2xl', fontSize: 'xl' },
    },
    shape: {
      square: { borderRadius: 'md' },
    },
    color: {
      primary: {
        color: 'primary',
      },
      secondary: {
        color: 'secondary',
      },
    },
  },
  defaultVariants: {
    visual: 'funky',
    size: 'sm',
    shape: 'square',
  },
});
