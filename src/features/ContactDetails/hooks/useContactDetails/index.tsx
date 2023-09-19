import { useQuery } from '@tanstack/react-query';

import ContactDetailsService from '../../services/ContactDetailsService';

export const useContactDetails = (id: string) => {
  const { isLoading, isError, data } = useQuery(['contact-details-' + id], () =>
    ContactDetailsService.getById(id),
  );

  return {
    data,
    isError,
    isLoading,
  };
};
