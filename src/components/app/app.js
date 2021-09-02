import React, {useState} from "react";

import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import {ItemList} from "../item-list/itemList";
import {PersonDetails} from "../person-details/personDetails";
import './app.css';

function App () {

    const [ showRandomPlanet, setShowRandomPlanet ] = useState(true);
    const [ selectedPerson, setSelectedPerson ] = useState(null);

    function onPersonSelected (id) {
        setSelectedPerson(id);
    }

    return (
      <div>
          <Header />
          <RandomPlanet />
          <div className="row mb2">
              <ItemList onItemSelected={onPersonSelected}/>
              <PersonDetails onChangePerson={selectedPerson}/>
          </div>
      </div>
    );
}

export default App;