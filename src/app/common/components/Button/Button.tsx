import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import { buttonRecipe, ButtonRecipeVariantProps } from '@style/recipes';
import { cx } from '@style/css';

type HtmlButton = ButtonHTMLAttributes<HTMLButtonElement>;
export type ButtonProps = PropsWithChildren<HtmlButton & ButtonRecipeVariantProps>;

/**
 *
 * https://panda-css.com/docs/concepts/style-props#recipe
 * recipe -> compoWrapper = <tag className={recipe(props)} />
 *
 */
export const Button: FC<ButtonProps> = ({ children, visual, size, color, shape, className, ...rest }) => {
  return (
    <button {...rest} className={cx(buttonRecipe({ visual, size, color, shape }), className)}>
      {children}
    </button>
  );
};
