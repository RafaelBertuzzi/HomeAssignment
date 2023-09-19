import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { ContactDetails, ContactList } from '@screens';

export type TAppStackRoutes = {
  'contact-list': undefined;
  'contact-details': { id: string };
};

const Stack = createNativeStackNavigator<TAppStackRoutes>();
export type AppNavigatorStackRoutesProps =
  NativeStackNavigationProp<TAppStackRoutes>;

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="contact-list" component={ContactList} />
      <Stack.Screen name="contact-details" component={ContactDetails} />
    </Stack.Navigator>
  );
}
