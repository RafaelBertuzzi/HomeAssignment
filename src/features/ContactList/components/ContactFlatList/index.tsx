import { useMemo } from 'react';
import { RefreshControl } from 'react-native';

import { Divider, FlatList, Stack, Text } from '@components';
import { useAppSelector } from '@redux/hooks';

import { ContactCard } from '../ContactCard';

import { IContactFlatListProps } from './types';

export const ContactFlatList = ({
  data,
  isLoading,
  isRefetching,
  refetch,
}: IContactFlatListProps) => {
  const { favorited } = useAppSelector((state) => state.contacts);

  const favoritedIds = useMemo(
    () => favorited.map((item) => item.recordID),
    [favorited],
  );

  const contacts = useMemo(() => {
    return [
      ...favorited,
      ...data.filter((item) => {
        return !favoritedIds.includes(item.recordID);
      }),
    ];
  }, [favorited, data]);

  if (isLoading) {
    return <Text title="Loading..." />;
  }

  return (
    <>
      <FlatList
        data={contacts}
        ItemSeparatorComponent={() => <Divider my={4} />}
        renderItem={({ item }) => (
          <ContactCard
            id={item.recordID}
            name={`${item.givenName} ${item.familyName}`}
            isFavorited={favoritedIds.includes(item.recordID)}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }
        keyExtractor={(item) => item.recordID}
        ListFooterComponent={() => (
          <Stack alignItems={'center'} mt={2}>
            <Text title={`${data?.length} contacts`} />
          </Stack>
        )}
      />
    </>
  );
};
