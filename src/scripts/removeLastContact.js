import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('No contacts to remove. The database is already empty.');
      return;
    }

    const updatedContacts = contacts.slice(0, -1);
    await writeContacts(updatedContacts);
    console.log(`Successfully removed the last contact. Total contacts: ${updatedContacts.length}`);
    console.log('The last contact has been removed successfully: ', contacts[contacts.length - 1]);
  } catch (error) {
    console.error('Error removing the last contact:', error);
  }
};

removeLastContact();
