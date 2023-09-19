import { TouchableOpacity } from 'react-native';

import { Icon, Stack, Text } from '@components';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorStackRoutesProps } from '@routes/app.routes';

import { IContactCardProps } from './types';

export const ContactCard = ({ id, isFavorited, name }: IContactCardProps) => {
  const navigation = useNavigation<AppNavigatorStackRoutesProps>();

  const onPress = () => {
    navigation.navigate('contact-details', { id });
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Stack direction={'row'} alignItems={'center'} space={4}>
        <Text fontSize="lg" title={name} />
        {isFavorited && <Icon name={'star-solid'} />}
      </Stack>
    </TouchableOpacity>
  );
};
