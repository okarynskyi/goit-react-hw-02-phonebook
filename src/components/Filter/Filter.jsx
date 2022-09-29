import { nanoid } from 'nanoid';



export const Filter = ({ filter, handleChange }) => {
    const filterId = nanoid();
    return (
        <label htmlFor={filterId}>Find contacts by name
            <input type="text" id = {filterId} name="filter" value={filter} onChange={handleChange}/>
        </label>
    )
}