import {useEffect} from 'react';
import {connect} from 'react-redux';
import {populateContacts} from '../components/actions/addContactAction';

const ContactList = (props) => {
  const {contacts, dispatch} = props;
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('contacts'));
    if (data) {
      dispatch(populateContacts(data));
    }
  }, []);

  return (
    <div>
      <form>
        <div class='form-group'>
          <div class='form-group has-feedback'>
            <span class='glyphicon glyphicon-search form-control-feedback'></span>
            <input
              type='text'
              className='form-control search-input'
              id='inputValidation'
              placeholder='Search'
            />
            <span class='glyphicon glyphicon-plus form-control-feedback'></span>
          </div>
        </div>
      </form>
      <p className='contact-heading'>Contacts</p>

      <ul className='contact-list'>
        {contacts.map((contact, i) => (
          <li
            key={i}
            className='d-flex align-items-center justify-space-around'
            onClick={props.messaging}>
            <span className='avatar'></span>
            <div className='details'>
              <span className='name'>{contact.data.firstName}</span>
              <span className='phoneNo'>{contact.data.phone}</span>
              <span className='time'>5min</span>
            </div>
            <span className='call glyphicon glyphicon-earphone'></span>
            <span className='message glyphicon glyphicon-envelope'></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};
export default connect(mapStateToProps)(ContactList);
