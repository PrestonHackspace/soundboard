import { CSSProperties } from 'react';
import { Theme } from 'material-ui';
import returnof from 'returnof';

export const Styles = (theme: Theme) => ({
  App: {
    [theme.breakpoints.down('xs')]: {
      boxShadow: 'none',
      margin: 0,
    },

    textAlign: 'center',
    maxWidth: 480,
    margin: '16px auto',
    flexDirection: 'row',
  } as CSSProperties,
});

const stylesReturn = returnof(Styles);

export type ClassNames = keyof typeof stylesReturn;
