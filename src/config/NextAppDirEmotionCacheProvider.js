'use client';

import React from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

export function NextAppDirEmotionCacheProvider(props) {
  const { options, children } = props;

  return <CacheProvider value={createCache(options)}>{children}</CacheProvider>;
}
