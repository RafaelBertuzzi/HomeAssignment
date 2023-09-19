import { Contact, PostalAddress } from 'react-native-contacts';

import { cleanup } from '@testing-library/react-native';
import { rendererWithProviders } from '@utils/testUtils';

import { Header } from '.';

const mockedData = {
  backTitle: '',
  displayName: 'Kate Bell',
  thumbnailPath: '',
  department: 'Marketing',
  isStarred: false,
  note: 'Kate Bell has been working on new designs for our holiday product line. She has some great ideas.',
  prefix: 'Ms.',
  suffix: 'Jr.',
  birthday: { day: 20, month: 1, year: 1978 },
  company: 'Creative Consulting',
  emailAddresses: [{ email: 'kate-bell@mac.com', label: 'work' }],
  familyName: 'Bell',
  givenName: 'Kate',
  hasThumbnail: false,
  imAddresses: [],
  jobTitle: 'Producer',
  middleName: '',
  phoneNumbers: [
    { label: 'mobile', number: '(555) 564-8583' },
    { label: 'main', number: '(415) 555-3695' },
  ],
  postalAddresses: [
    {
      city: 'Hillsborough',
      country: '',
      label: 'work',
      postCode: '94010',
      region: 'CA',
      state: 'CA',
      street: '165 Davis Street',
    },
  ] as PostalAddress[],
  recordID: '177C371E-701D-42F8-A03B-C61CA31627F6',
  urlAddresses: [{ label: 'homepage', url: 'www.icloud.com' }],
} as Contact;

describe('Contact Details Screen Component: Header', () => {
  afterEach(cleanup);

  it('should render', () => {
    const json = rendererWithProviders(<Header contact={mockedData} />);
    expect(json).toMatchSnapshot();
  });
});
