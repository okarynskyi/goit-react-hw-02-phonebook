import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const Filter = ({ filter, handleChange }) => {
    const filterId = nanoid();
    return (
        <label htmlFor={filterId}>Find contacts by name
            <input type="text" id = {filterId} name="filter" value={filter} onChange={handleChange}/>
        </label>
    )
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};