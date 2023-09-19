import { ReactNode } from 'react';
import { IStackProps as IStackPropsNB } from 'native-base';

export interface IStackProps extends IStackPropsNB {
  children: ReactNode;
}
