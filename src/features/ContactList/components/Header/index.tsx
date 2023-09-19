import { Divider, IconButton, Stack, Text } from '@components';

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

        <IconButton icon="search" onPress={() => {}} />
      </Stack>
      <Divider />
    </Stack>
  );
};
