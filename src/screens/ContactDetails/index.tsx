import { ScrollView } from 'react-native';

import { Stack, Text } from '@components';
import {
  Header,
  MultipleInfoText,
  OneInfoText,
} from '@features/ContactDetails/components';
import { useContactDetails } from '@features/ContactDetails/hooks';
import { useRoute } from '@react-navigation/native';

interface IRouteParams {
  id: string;
}

export const ContactDetails = () => {
  const route = useRoute();
  const { id } = route.params as IRouteParams;
  const { data: contact, isLoading } = useContactDetails(id);

  if (isLoading) {
    return <Text title={'Loading...'} />;
  }

  return !contact ? (
    <Text title={'Contact not found'} />
  ) : (
    <Stack flex={1}>
      <Header contact={contact} />
      <Stack flex={1} mx={4} my={4}>
        <ScrollView>
          <Stack space={4} flex={1} width={'full'}>
            <OneInfoText
              label="Name"
              value={`${contact.givenName} ${contact.familyName} `}
            />
            {contact.birthday && (
              <OneInfoText
                label="Birthday"
                value={`${contact.birthday.day}/${
                  contact.birthday.month < 10
                    ? `0${contact.birthday.month}`
                    : contact.birthday.month
                }/${contact.birthday.year}`}
              />
            )}
            {contact.phoneNumbers && (
              <MultipleInfoText
                label="Phone Numbers"
                value={contact.phoneNumbers.map(
                  (phoneNumber) => phoneNumber.number,
                )}
              />
            )}
            {contact.emailAddresses && (
              <MultipleInfoText
                label="Email Addresses"
                value={contact.emailAddresses.map(
                  (emailAddress) => emailAddress.email,
                )}
              />
            )}
            {contact.urlAddresses && (
              <MultipleInfoText
                label="URL Addresses"
                value={contact.urlAddresses.map((urlAddress) => urlAddress.url)}
              />
            )}
            <OneInfoText label="Job Title" value={contact.jobTitle} />
            {contact.company && (
              <OneInfoText label="Company" value={contact.company} />
            )}
            {contact.postalAddresses && (
              <MultipleInfoText
                label="Postal Addresses"
                value={contact.postalAddresses.map(
                  (postalAddress) =>
                    `${postalAddress.street}, ${postalAddress.city}, ${postalAddress.state}, ${postalAddress.postCode}, ${postalAddress.country}`,
                )}
              />
            )}
          </Stack>
        </ScrollView>
      </Stack>
    </Stack>
  );
};
