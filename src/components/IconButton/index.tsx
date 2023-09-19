import { Button, Icon } from '@components';

import { IIconButtonProps } from './types';

export const IconButton = ({ icon, ...rest }: IIconButtonProps) => {
  return (
    <Button variant={'unstyled'} {...rest}>
      <Icon name={icon} />
    </Button>
  );
};
