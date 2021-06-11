import {useState} from 'react';
import AddContactForm from './components/AddContactForm';
import ContactList from './components/ContactList';
import MsgDisplay from './components/MsgDisplay';
import MsgForm from './components/MsgForm';
import store from './store';

import './App.css';
import {Provider} from 'react-redux';

function App() {
  const [msgboxshow, setmsgboxshow] = useState(false);
  const messaging = () => {
    setmsgboxshow({
      msgboxshow: true,
    });
  };
  return (
    <Provider store={store}>
      <div className='App container'>
        <div className='row'>
          <div className='col-sm-4 left-panel'>
            <ContactList messaging={messaging} />
          </div>
          <div className='col-sm-8 right-panel'>
            {msgboxshow ? (
              <div>
                <MsgDisplay /> <MsgForm />
              </div>
            ) : (
              <AddContactForm />
            )}
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
