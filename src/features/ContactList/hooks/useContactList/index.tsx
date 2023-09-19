import { useEffect, useState } from 'react';
import { Contact } from 'react-native-contacts';

import { useQuery } from '@tanstack/react-query';

import ContactListService from '../../services/ContactListService';

export const useContactList = () => {
  const [isLoadingSaved, setIsLoadingSaved] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const {
    isLoading: isLoadingQuery,
    isError,
    data,
    refetch,
    isRefetching,
  } = useQuery(['contact-list'], () => ContactListService.getAll());

  useEffect(() => {
    if (data) {
      (async () => {
        setContacts(data);
        await ContactListService.saveAll(data);
      })();
    }
  }, [data]);

  useEffect(() => {
    if (isError) {
      (async () => {
        setIsLoadingSaved(true);
        const savedData = await ContactListService.getAllSaved();

        setContacts(savedData);
        setIsLoadingSaved(false);
      })();
    }
  }, [isError]);

  return {
    data: contacts,
    isLoading: isLoadingQuery || isLoadingSaved,
    refetch,
    isRefetching,
  };
};
