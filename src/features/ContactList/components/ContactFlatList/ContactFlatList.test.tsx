import { Contact } from 'react-native-contacts';

import { cleanup, screen } from '@testing-library/react-native';
import { rendererWithProviders, renderWithProviders } from '@utils/testUtils';

import { ContactFlatList } from '.';

const mockedData = [
  {
    birthday: { day: 20, month: 1, year: 1978 },
    company: 'Creative Consulting',
    emailAddresses: [],
    familyName: 'Bell',
    givenName: 'Kate',
    hasThumbnail: false,
    imAddresses: [],
    jobTitle: 'Producer',
    middleName: '',
    phoneNumbers: [],
    postalAddresses: [],
    recordID: '177C371E-701D-42F8-A03B-C61CA31627F6',
    thumbnailPath: '',
    urlAddresses: [],
    backTitle: 'Back',
    department: 'Marketing',
    displayName: 'Kate Bell',
    isStarred: false,
    note: 'Kate Bell has been working on new designs for our holiday product line. She has some great ideas.',
    prefix: 'Ms.',
    suffix: 'Jr.',
  },
] as Contact[];

describe('ContactList Component: ContactFlatList', () => {
  afterEach(cleanup);

  it('should render ContactFlatList', () => {
    const json = rendererWithProviders(
      <ContactFlatList
        data={mockedData}
        isLoading={false}
        isRefetching={false}
        refetch={() => {}}
      />,
    );
    expect(json).toMatchSnapshot();
  });

  it('should render loading', () => {
    renderWithProviders(
      <ContactFlatList
        data={mockedData}
        isLoading={true}
        isRefetching={false}
        refetch={() => {}}
      />,
    );
    expect(screen.getByText('Loading...')).toBeTruthy();
  });
});
