
import NavBarStore from './components/navBar/navBar';
import MainWrapperStore from './components/mainWrapper/mainWrapper';
import RigthWrapperStore from './components/rigthWrapper/rigthWrapper'

import './App.scss';


function App() {
  sessionStorage.setItem('pseudo', "test");
  return (
      <div className="App">
        <NavBarStore />
        <MainWrapperStore />
        <RigthWrapperStore />
      </div>
  );
}

export default App;
