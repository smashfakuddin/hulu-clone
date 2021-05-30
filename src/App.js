import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Results from './Components/Results';
import requests from './Components/requests';
import { useState } from 'react';

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className='app'>
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
