export const ContactList = ({contacts, removeContact}) => {
    const elements = contacts.map(({ name, number, id }) => {
        return <li key={id}>{name}: {number}
            <button onClick={() => {removeContact(id)}}>Delete</button>
        </li>
    })
    return (
        <ul>{elements}</ul>
    )
}