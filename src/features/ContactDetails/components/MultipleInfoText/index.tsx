import { Stack, Text } from '@components';

import { IMultipleInfoTextProps } from './types';

export const MultipleInfoText = ({ label, value }: IMultipleInfoTextProps) => {
  return (
    <Stack direction={'row'} space={4}>
      <Text title={`${label}:`} fontSize="lg" />
      <Stack width={'50%'}>
        {value.map((item) => (
          <Text key={item} title={item} fontSize="lg" />
        ))}
      </Stack>
    </Stack>
  );
};
