import { CSSProperties } from 'react';

export const Styles = {
  App: {
    textAlign: 'center',
    maxWidth: 640,
    margin: '0 auto',
    flexDirection: 'row',
  } as CSSProperties,
};

export type ClassNames = keyof typeof Styles;
