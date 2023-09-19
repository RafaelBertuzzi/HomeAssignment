import { ImageSourcePropType } from 'react-native';

export type TIcon = 'search' | 'star-outline' | 'star-solid';

export type TIconNames = {
  [key in TIcon]: ImageSourcePropType;
};

export interface IIconProps {
  name: TIcon;
}
