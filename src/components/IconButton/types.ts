import { ImageSourcePropType } from 'react-native';

type Icon = 'search' | 'star-outline' | 'star-solid';

export interface IIconButtonProps {
  icon: Icon;
  onPress: () => void;
}

export type TIconNames = {
  [key in Icon]: ImageSourcePropType;
};
