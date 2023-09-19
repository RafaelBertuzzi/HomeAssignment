import { Contact } from 'react-native-contacts';

import { cleanup } from '@testing-library/react-native';
import { rendererWithProviders } from '@utils/testUtils';

import { ContactDetails } from '.';

const mockedData = {
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
} as Contact;

jest.mock('@features/ContactDetails/hooks/useContactDetails', () => ({
  useContactDetails: () => ({
    data: mockedData,
    isLoading: false,
  }),
}));

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useRoute: () => ({
    params: { id: mockedData.recordID },
  }),
}));

describe('ContactDetails Screen', () => {
  afterEach(cleanup);

  it('should render ContactDetails Screen', () => {
    const json = rendererWithProviders(<ContactDetails />);
    expect(json).toMatchSnapshot();
  });
});
