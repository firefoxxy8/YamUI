/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
/* tslint:disable:max-line-length */
// This file was auto-generated -- do not edit

import * as React from 'react';
import BaseIllustration from '../BaseIllustration';

export default class GenericFile extends BaseIllustration {
  public render() {
    const { size = 72 } = this.props;

    return (
      <svg
        viewBox="0 0 72 72"
        className={this.getClassName(size)}
        aria-hidden="true"
        tabIndex={-1}
        focusable="false"
      >
        <defs>
    <linearGradient id="GenericFile72-a" x1="6.467" x2="58.639" y1="7.804" y2="69.981" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopColor="#fff" stopOpacity={0} />
      <stop offset=".862" stopColor="#5e5e5e" stopOpacity=".063" />
      <stop offset={1} stopOpacity=".1" />
    </linearGradient>
    <linearGradient id="GenericFile72-b" x1={52} x2={52} y1="24.844" y2="20.146" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopColor="#828282" stopOpacity={0} />
      <stop offset=".862" stopColor="#303030" stopOpacity=".063" />
      <stop offset={1} stopOpacity=".1" />
    </linearGradient>
    <linearGradient id="GenericFile72-c" x1="48.792" x2="57.501" y1="23.208" y2="14.499" gradientUnits="userSpaceOnUse">
      <stop offset={0} stopColor="#fff" stopOpacity={0} />
      <stop offset=".446" stopColor="#fff" stopOpacity=".008" />
      <stop offset=".636" stopColor="#fff" stopOpacity=".036" />
      <stop offset=".776" stopColor="#fff" stopOpacity=".085" />
      <stop offset=".892" stopColor="#fff" stopOpacity=".154" />
      <stop offset=".993" stopColor="#fff" stopOpacity=".243" />
      <stop offset={1} stopColor="#fff" stopOpacity=".25" />
    </linearGradient>
  </defs>
  <path fill="#fff" d="M60 67H12V5h34l14 14v48z" />
  <path fill="#949494" d="M47 4H11v64h50V18zm0 3l11 11H47zm12 59H13V6h32v14h14z" />
  <path fill="url(#GenericFile72-a)" d="M61 18L47 4H11v64h50z" />
  <path fill="url(#GenericFile72-b)" d="M45 20h14v5H45z" />
  <path fill="url(#GenericFile72-c)" d="M61 18L47 4H11v2h34v14h14v48h2V18z" />
      </svg>
    );
  }
}
