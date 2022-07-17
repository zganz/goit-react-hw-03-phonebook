import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  handleDelete: PropTypes.func.isRequired,
};
