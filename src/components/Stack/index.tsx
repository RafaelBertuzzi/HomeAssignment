import React from 'react';
import { Stack as StackNB } from 'native-base';

import { IStackProps } from './types';

export const Stack = ({ children, ...rest }: IStackProps) => {
  return <StackNB {...rest}>{children}</StackNB>;
};
