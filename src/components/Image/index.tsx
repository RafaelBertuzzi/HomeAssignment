import { Image as ImageNB } from 'native-base';

import { IImageProps } from './types';

export const Image = ({ ...rest }: IImageProps) => {
  return <ImageNB {...rest} />;
};
