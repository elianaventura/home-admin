'use client';

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { NextAppDirEmotionCacheProvider } from './NextAppDirEmotionCacheProvider';

import theme from './theme';

export default function ThemeRegistry({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <NextAppDirEmotionCacheProvider options={{ key: 'css', prepend: true }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </React.Fragment>
  );
}
