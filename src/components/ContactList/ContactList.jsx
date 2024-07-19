import { Component } from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  static propTypes = {
    filterContact: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired,
  };

  render() {
    const { filterContact, deleteContact } = this.props;
    const filteredContacts = filterContact();
    return (
      <ul>
        {filteredContacts.map(filteredContact => (
          <ContactListItem
            key={filteredContact.id}
            filteredContact={filteredContact}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    );
  }
}
