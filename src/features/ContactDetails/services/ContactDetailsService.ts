import Contacts from 'react-native-contacts';

class ContactDetailsService {
  async getById(id: string) {
    return await Contacts.getContactById(id);
  }
}

export default new ContactDetailsService();
