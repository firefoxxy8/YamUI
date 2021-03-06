/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';

export const getClassNames = memoizeFunction(() => {
  return mergeStyleSets({
    wrapper: {
      padding: '0.2rem 0 0.6rem',
    },
  });
});
