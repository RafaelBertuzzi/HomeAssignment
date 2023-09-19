import { Stack, Text } from '@components';

import { IOneInfoTextProps } from './types';

export const OneInfoText = ({ label, value }: IOneInfoTextProps) => {
  return (
    <Stack direction={'row'} space={4}>
      <Text title={`${label}:`} fontSize="lg" />
      <Text title={value} fontSize="lg" />
    </Stack>
  );
};
