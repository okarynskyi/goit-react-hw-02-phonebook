import PropTypes from 'prop-types';

export const ContactList = ({ contacts, removeContact }) => {
    const elements = contacts.map(({ name, number, id }) => {
        return <li key={id}>{name}: {number}
            <button onClick={() => {removeContact(id)}}>Delete</button>
        </li>
    })
    return (
        <ul>{elements}</ul>
    )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeContact: PropTypes.func.isRequired,
};