import React from 'react';
import './App.css';
import APIfetch from './components/APIcomponents/APIfetch.js';
import CharacterCard from './components/displayComponents/Card.js';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const testSkywalker = APIfetch("https://swapi.co/api/people/1");
  const dataHolder = testSkywalker.results;
  console.log("App.js: App(): testSkywalker", testSkywalker);
  console.log("App.js: App(): dataHolder", dataHolder);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterCard dataToUse = {testSkywalker}/>
      {/* {testSkywalker.results.map(e => {
        return(
          <CharacterCard dataToUse = {e}/>
        )
      })} */}
    </div>
  );
}

export default App;
