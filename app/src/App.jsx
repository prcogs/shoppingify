
import NavBarStore from './components/navBar/navBar';
import MainWrapperStore from './components/mainWrapper/mainWrapper';

import './App.scss';


function App() {
  return (
      <div className="App">
        <NavBarStore />
        <MainWrapperStore />
      </div>
  );
}

export default App;
