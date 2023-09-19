import { Button as ButtonNB } from 'native-base';

import { IButtonProps } from './types';

export const Button = ({ ...rest }: IButtonProps) => {
  return <ButtonNB {...rest} />;
};
