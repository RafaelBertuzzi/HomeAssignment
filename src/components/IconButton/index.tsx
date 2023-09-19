import { Button, Image } from 'native-base';

import { IIconButtonProps, TIconNames } from './types';

const ICON_IMAGES: TIconNames = {
  search: require('../../assets/icons/search.png'),
  'star-outline': require('../../assets/icons/star-outline.png'),
  'star-solid': require('../../assets/icons/star-solid.png'),
};

export const IconButton = ({ icon, ...rest }: IIconButtonProps) => {
  return (
    <Button variant={'unstyled'} {...rest}>
      <Image size={6} source={ICON_IMAGES[icon]} alt={icon} />
    </Button>
  );
};
