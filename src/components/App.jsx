import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList'

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
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

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
            [name]: value,
        })
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state
    
    if (!filter) { return contacts }
    
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLocaleLowerCase();
      const normalizedNumber = number.toLocaleLowerCase();
      const result = normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter);
      return result
    })
    return filteredContacts
  }

  render() {
    const { addContact } = this;
    const { filter } = this.state;
    const contacts = this.getFilteredContacts();

    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm addContact={addContact} />
          <h2>Contacts</h2>
          <input type="text" name="filter" value={filter} onChange={this.handleChange} />
          <ContactList contacts={contacts} />
        </div>        
      </>
    )
  }
};
