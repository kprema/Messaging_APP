import {useEffect} from 'react';
import {connect} from 'react-redux';
import {addMSG} from './actions/addContactAction';

const MsgDisplay = (props) => {
  const {msg, dispatch} = props;
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('msg'));
    if (data) {
      dispatch(addMSG(data));
    }
  }, []);
  return (
    <div>
      <div className='new-contact d-flex align-items-center'>
        <span className='glyphicon glyphicon-arrow-left'></span>
        <span>NEW CONTACT</span>
      </div>
      <ul className='msgItems'>
        {msg.map((msgitem) => (
          <li className='d-flex'>
            <span className='avatar'></span>
            <span className='msg'>{msgitem}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    msg: state.msg,
  };
};
export default connect(mapStateToProps)(MsgDisplay);
