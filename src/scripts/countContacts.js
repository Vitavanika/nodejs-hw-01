import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(`Total contacts in ${PATH_DB}: ${contacts.length}`);
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error);
    throw error;
  }
};

console.log(await countContacts());
