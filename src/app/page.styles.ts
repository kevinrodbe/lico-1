import { cva } from '@style/css';
import { styled } from '@style/jsx';

export const MainBox = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '[100%]',
      height: '[100vh]',
    },
  })
);
