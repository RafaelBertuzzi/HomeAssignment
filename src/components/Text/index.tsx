import { Text as TextNB } from 'native-base';

import { ITextProps } from './types';

export const Text = ({ title, ...rest }: ITextProps) => {
  return <TextNB {...rest}>{title}</TextNB>;
};
