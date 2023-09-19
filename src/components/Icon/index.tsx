import { Image } from '@components';

import { IIconProps, TIconNames } from './types';

const ICON_IMAGES: TIconNames = {
  search: require('../../assets/icons/search.png'),
  'star-outline': require('../../assets/icons/star-outline.png'),
  'star-solid': require('../../assets/icons/star-solid.png'),
};

export const Icon = ({ name }: IIconProps) => {
  return <Image size={6} source={ICON_IMAGES[name]} alt={name} />;
};
