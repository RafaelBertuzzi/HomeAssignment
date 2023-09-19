import { useDispatch } from 'react-redux';

import { Divider, IconButton, Stack } from '@components';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '@redux/hooks';
import { addOrRemoveFavorited } from '@redux/reducers/contactsReducer';

import { IHeaderProps } from './types';

const getStarIcon = (isFavorited: boolean, onPress: () => void) => {
  return isFavorited ? (
    <IconButton icon="star-solid" key="star-solid" onPress={onPress} />
  ) : (
    <IconButton icon="star-outline" key="star-outline" onPress={onPress} />
  );
};

export const Header = ({ contact }: IHeaderProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { favorited } = useAppSelector((state) => state.contacts);
  const isFavorited = favorited.some(
    (item) => item.recordID === contact.recordID,
  );

  const handleOnLeftArrowPress = () => {
    navigation.goBack();
  };

  const handleOnStarPress = () => {
    dispatch(addOrRemoveFavorited({ contact }));
  };

  return (
    <Stack position={'fixed'}>
      <Stack
        safeAreaTop
        marginRight={4}
        justifyContent="space-between"
        alignItems={'center'}
        direction={'row'}
      >
        <IconButton icon="left-arrow" onPress={handleOnLeftArrowPress} />

        {getStarIcon(isFavorited, handleOnStarPress)}
      </Stack>
      <Divider />
    </Stack>
  );
};
