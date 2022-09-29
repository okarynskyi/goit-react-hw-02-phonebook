import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList'

export class App extends Component {
  state = {
    contacts: []
  }

  addContact = (contact) => {
    this.setState((prev) => {
      const newContact = {
        id: nanoid(),
        ...contact
      }
      return {
        contacts: [...prev.contacts, newContact]
      }
    })
  }

  render() {
    const { addContact } = this;
    const { contacts } = this.state;

    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm addContact={addContact} />
          <h2>Contacts</h2>
          <ContactList contacts={contacts} />
        </div>        
      </>
    )
  }
};
