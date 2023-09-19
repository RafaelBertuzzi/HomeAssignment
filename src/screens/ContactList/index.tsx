import { Stack } from '@components';
import { ContactFlatList } from '@features/ContactList/components/ContactFlatList';
import { Header } from '@features/ContactList/components/Header';
import { useContactList } from '@features/ContactList/hooks';

export const ContactList = () => {
  const { data, isLoading, isRefetching, refetch } = useContactList();

  return (
    <Stack flex={1}>
      <Header />
      <Stack flex={1} marginX={4} mt={4}>
        <ContactFlatList
          data={data}
          isLoading={isLoading}
          isRefetching={isRefetching}
          refetch={refetch}
        />
      </Stack>
    </Stack>
  );
};
