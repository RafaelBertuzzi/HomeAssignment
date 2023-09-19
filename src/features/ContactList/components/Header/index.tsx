import { Divider, Stack, Text } from '@components';

export const Header = () => {
  return (
    <Stack position={'fixed'}>
      <Stack
        safeAreaTop
        marginLeft={4}
        marginRight={4}
        justifyContent="space-between"
        alignItems={'center'}
        direction={'row'}
      >
        <Text title="Contact List" fontSize="xl" />
      </Stack>
      <Divider />
    </Stack>
  );
};
