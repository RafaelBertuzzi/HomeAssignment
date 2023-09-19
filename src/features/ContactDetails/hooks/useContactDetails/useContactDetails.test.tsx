import { Contact } from 'react-native-contacts';

import { cleanup, renderHook } from '@testing-library/react-native';

import { useContactDetails } from '.';

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

jest.mock('@tanstack/react-query', () => ({
  useQuery: () => ({
    data: mockedData,
    isLoading: false,
    refetch: jest.fn(),
    isRefetching: false,
    isError: true,
  }),
}));

jest.clearAllMocks();

describe('useContactDetails Hook', () => {
  afterEach(cleanup);

  it('should get contacts from query', () => {
    const { result } = renderHook(() => useContactDetails(mockedData.recordID));
    expect(result.current.data).toStrictEqual(mockedData);
  });

  it('should get contacts from saved data', () => {
    jest.mock('@tanstack/react-query', () => ({
      useQuery: () => ({
        data: [],
        isLoading: false,
        refetch: jest.fn(),
        isRefetching: false,
        isError: true,
      }),
    }));

    const { result } = renderHook(() => useContactDetails(mockedData.recordID));
    expect(result.current.data).toStrictEqual(mockedData);
  });
});
