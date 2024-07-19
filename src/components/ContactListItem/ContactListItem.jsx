import { Component } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class ContactListItem extends Component {
  static propTypes = {
    filteredContact: PropTypes.object.isRequired,
    deleteContact: PropTypes.func.isRequired,
  };
  /*  componentWillUnmount() {
    console.log('componentWillUnmount');
  } */
  handleDelete = () => {
    const { filteredContacts, deleteContact } = this.props;
    deleteContact(filteredContacts.id);
    Notify.success(`${filteredContacts.name} is deleted`, {
      position: 'center-top',
    });
  };

  render() {
    const { filteredContact } = this.props;

    return (
      <li>
        <p>{filteredContact.name}</p>
        <p>{filteredContact.number}</p>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}
