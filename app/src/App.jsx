import { useSelector } from 'react-redux';
import { authSelector } from './selectors/authSelector';
import { useCallback, useState } from 'react';

import AuthFormStore from './components/authForm/authForm';
import MainWrapperStore from './components/mainWrapper/mainWrapper';
import NavBarStore from './components/navBar/navBar';
import RigthWrapperStore from './components/rigthWrapper/rigthWrapper'

import './App.scss';


function App() {
  const auth = useSelector(authSelector)
  const [viewRigthWrapper, setViewRigthWrapper] = useState(false)

  const handleViewRigthWrapperMobile = useCallback(() => {
    setViewRigthWrapper(!viewRigthWrapper)
  }, [viewRigthWrapper])
  
  if(auth.succes) {
    return (
      <div className="App">
        <NavBarStore handleViewRigthWrapperMobile={handleViewRigthWrapperMobile}/>
        <MainWrapperStore />
        {window.screen.width > 767 || (viewRigthWrapper && window.screen.width < 767) ? <RigthWrapperStore /> : ""}
      </div>
    );
  } else {
    return (
      <>
        <AuthFormStore />
        <p className="infoDev">Developed by Florian Fort <a href="https://github.com/prcogs" target="_blank">Precgs@GithHub</a> for a challenge offred by <a href="https://devchallenges.io/" target="_blank">DevChallenges</a></p>
      </>
    )
  }
  
}

export default App;
