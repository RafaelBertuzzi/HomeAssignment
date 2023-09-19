import { Icon, Stack, Text } from '@components';

import { IContactCardProps } from './types';

export const ContactCard = ({ isFavorited, name }: IContactCardProps) => {
  return (
    <Stack direction={'row'} alignItems={'center'} space={4}>
      <Text fontSize="lg" title={name} />
      {isFavorited && <Icon name={'star-solid'} />}
    </Stack>
  );
};
