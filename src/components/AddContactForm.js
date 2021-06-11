import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addContactAction} from './actions/addContactAction';

const AddContactForm = (props) => {
  const [values, setValues] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(
      addContactAction({
        data: values,
      })
    );
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const reset = (e) => {
    const INITIAL_STATE = [
      {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
      },
    ];
    setValues(INITIAL_STATE);
  };
  return (
    <div>
      <div className='new-contact d-flex align-items-center'>
        <span className='glyphicon glyphicon-arrow-left'></span>
        <span>NEW CONTACT</span>
      </div>

      <div className='profile-avatar'></div>
      <p className='profile'>PROFILE</p>

      <form onSubmit={handleSubmit} className='createform'>
        <div className='col-md-6 d-flex align-items-center'>
          <label>
            <span className='glyphicon glyphicon-user'></span>
          </label>

          <input
            name='firstName'
            type='text'
            placeholder='First Name'
            value={values.firstName}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className='col-md-6 d-flex align-items-center'>
          <label></label>
          <div>
            <input
              name='lastName'
              type='text'
              placeholder='Last Name'
              value={values.lastName}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
        </div>

        <div className='col-md-12 d-flex align-items-center'>
          <label>
            <span className='glyphicon glyphicon-earphone'></span>
          </label>

          <input
            name='phone'
            type='number'
            placeholder='Phone Number'
            value={values.phone}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className='col-md-6 d-flex align-items-center'>
          <label>
            <span className='glyphicon glyphicon-envelope'></span>
          </label>
          <div>
            <input
              name='email'
              type='email'
              placeholder='Email'
              value={values.email}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
        </div>

        <div className='col-md-12'>
          <button type='submit' className='btn btn-secondary save'>
            Submit
          </button>
          <button
            type='reset'
            className='btn btn-secondary reset'
            onClick={reset}>
            Discard
          </button>
        </div>
      </form>
    </div>
  );
};
export default connect()(AddContactForm);
