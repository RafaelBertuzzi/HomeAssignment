import { PermissionsAndroid, Platform } from 'react-native';
import Contacts, { Contact } from 'react-native-contacts';

import AsyncStorage from '@react-native-async-storage/async-storage';

class ContactService {
  async getAll() {
    let permission = 'granted';
    if (Platform.OS === 'android') {
      permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts',
          message: 'This app would like to view your contacts.',
          buttonPositive: 'Please accept bare mortal',
        },
      );
    } else {
      permission = await Contacts.checkPermission();
    }
    if (permission === 'granted' || permission === 'authorized') {
      return await Contacts.getAll();
    }
  }

  async saveAll(data: Contact[]) {
    await AsyncStorage.setItem('@CONTACTS-APP', JSON.stringify(data));
  }

  async getAllSaved(): Promise<Contact[]> {
    const storage = await AsyncStorage.getItem('@CONTACTS-APP');
    const contacts: Contact[] = storage ? JSON.parse(storage) : [];
    return contacts;
  }
}

export default new ContactService();
