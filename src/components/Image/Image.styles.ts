/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { borders } from '../../util/styles/borders';
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { BorderType } from './';

export interface BoxStyleProps {
  borderType?: BorderType;
  fullWidth?: boolean;
  block?: boolean;
}

export const getClassNames = memoizeFunction((styleProps: BoxStyleProps) => {
  const { borderType, fullWidth, block } = styleProps;

  return mergeStyleSets({
    root: {
      display: fullWidth || block ? 'block' : 'inline-block',
      borderRadius: borderType ? borders[borderType] : undefined,
    },
  });
});
