import {useState} from 'react';
import {connect} from 'react-redux';
import {addMSG} from './actions/addContactAction';

function MsgForm(props) {
  const [values, setValues] = useState('');
  const INITIAL_VALUE = {
    message: '',
  };
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const msgForm = (e) => {
    e.preventDefault();
    props.dispatch(
      addMSG({
        values,
      })
    );
    setValues(INITIAL_VALUE);
  };

  return (
    <div>
      <form onSubmit={msgForm} className='msg__form'>
        <input
          type='text'
          name='message'
          value={values.message}
          onChange={(e) => handleChange(e)}
        />
        <button type='submit'>
          <span className='glyphicon glyphicon-send'></span>
        </button>
      </form>
    </div>
  );
}

export default connect()(MsgForm);
