import { cva, RecipeVariantProps } from '@style/css';
import { styled } from '@style/jsx';

const btnRecipe = cva({
  base: {
    display: 'flex',
    borderRadius: 'sm',
    cursor: 'pointer',
  },
  variants: {
    visual: {
      funky: { bg: 'blue.500', color: '[white]' },
      edgy: { border: '1px solid {colors.blue.300}' },
    },
    size: {
      sm: { padding: 'sm', fontSize: 'sm' },
      md: { padding: 'md', fontSize: 'md' },
      lg: { padding: 'lg', fontSize: 'lg' },
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
  compoundVariants: [
    // apply when both small size and primary color are selected
    {
      size: 'sm',
      color: 'primary',
      css: {
        border: '2px solid [red]',
      },
    },
    // apply when both large size and secondary color are selected and the button is disabled
    {
      size: 'lg',
      color: 'secondary',
      // disabled: true,
      css: {
        backgroundColor: '[lightgray]',
        color: '[darkgray]',
        border: 'none',
      },
    },
    // apply when both small or medium size, and secondary color variants are applied
    {
      size: ['sm', 'md'],
      color: 'secondary',
      css: {
        fontWeight: 'extrabold',
      },
    },
  ],
});

export type BtnVariants = RecipeVariantProps<typeof btnRecipe>;

export const Btn = styled('button', btnRecipe);
