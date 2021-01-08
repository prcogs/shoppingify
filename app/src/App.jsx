import { useSelector } from 'react-redux';
import { authSelector } from './selectors/authSelector';

import AuthFormStore from './components/authForm/authForm';
import MainWrapperStore from './components/mainWrapper/mainWrapper';
import NavBarStore from './components/navBar/navBar';
import RigthWrapperStore from './components/rigthWrapper/rigthWrapper'

import './App.scss';


function App() {
  const auth = useSelector(authSelector)
  
  if(auth.succes) {
    return (
      <div className="App">
        <NavBarStore />
        <MainWrapperStore />
        <RigthWrapperStore />
      </div>
    );
  } else {
    return <AuthFormStore />
  }
  
}

export default App;
