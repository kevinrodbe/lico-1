/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Button, ButtonProps } from '@/app/common/components/Button';
import { Btn } from './common/components/Btn';
import { MainBox } from './page.styles';
import { css } from '@style/css';
import { Divider, Stack } from '@style/jsx';
import { useState } from 'react';

export default function Home() {
  const [btnType, setBtnType] = useState<ButtonProps['visual']>('funky');

  const handleClick = () => {
    setBtnType(prev => (prev === 'funky' ? 'edgy' : 'funky'));
  };

  return (
    <MainBox>
      <div className={css({ layerStyle: 'container' })}>
        <Stack gap={'lg'}>
          <h1 className={css({ textStyle: 'h1' })}>Hi 👋, with Panda 🐼</h1>
          <Divider mb={'sm'} />
          <Button className="pepe" size={'xl'} visual={btnType} color="primary" onClick={handleClick}>
            Click me recipe
          </Button>
          <Btn size={'xl'} visual={btnType as any} color="primary" onClick={handleClick}>
            Click me CVA
          </Btn>
        </Stack>
      </div>
    </MainBox>
  );
}
