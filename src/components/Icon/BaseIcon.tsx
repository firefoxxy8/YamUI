/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { IconSize } from './types';
import { getClassNames } from './Icon.styles';

export { IconSize };

export interface IconProps extends BaseComponentProps {
  /**
   * Sets icon style to `display: block`. This is helpful if the inline icon's `line-height` is
   * taller than the current line's `line-height`, and is creating extra vertical space.
   */
  block?: boolean;

  /**
   * Manual color override (by default the icon inherits its parent's color). Can be any valid CSS
   * color.
   */
  color?: string;

  /**
   * Icon size, which also accounts for `font-size` and `line-height`. If not set, size will
   * match the nearest <Block> or <Text> parent with textSize specified.
   */
  size?: IconSize;
}

/**
 * An `Icon` renders an SVG icon.
 */
export default abstract class BaseIcon extends React.Component<IconProps> {
  protected getClassName() {
    const { block, className, color } = this.props;
    const classNames = getClassNames({ block, color });

    return join(['y-icon', className, classNames.root]);
  }

  protected getStyle() {
    const { size } = this.props;
    return size ? { height: `${size}px`, width: `${size}px` } : {};
  }
}
