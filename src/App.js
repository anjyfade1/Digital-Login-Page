import Details from '../src/component/details/details';
import './App.css';
import Clip from '../src/component/clip/clip';

const App = () => {
  return (
    <div className="App">
      <div className='app-details'>
        <Details/>
      </div>
      <div className='app-clip'>
        <Clip/>
      </div>
    </div>
  );
}

export default App;
