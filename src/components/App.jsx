import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList'

export class App extends Component {
  state = {
    contacts: [],
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
