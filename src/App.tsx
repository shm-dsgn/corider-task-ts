import './App.css';
import Header from './components/Header/Header';
import TripDetails from './components/TripDetails/TripDetails';
import Input from './components/Input/Input';

function App() {
  return (
    <div className="App">
      <div className="top-block">
        <Header />
        <TripDetails />
      </div>
      <div className="border"></div>
      <div className="bottom-block">
        <Input/>
      </div>
    </div>
  );
}

export default App;
