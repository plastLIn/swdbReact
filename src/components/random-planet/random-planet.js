import React, {useState} from "react";

import './random-planet.css';
import {getPlanet} from "../../net-services";


function RandomPlanet () {

    const [name , setName] = useState(null);
    const [population, setPopulation] = useState(null);
    const [rotationPeriod, setRotationPeriod] = useState(null);
    const [diameter, setDiameter] = useState(null);
//    const id = Math.floor(Math.random()*25) + 2;
    const id = 21;
    const updatePlanet = getPlanet(id)
        .then((planet) => {
        setName(planet.name);
        setPopulation(planet.population);
        setRotationPeriod(planet.rotation_period);
        setDiameter(planet.diameter);
    });

    return (
        <div className="random-planet jumbotron rounded">
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${ id }.jpg`} />
            <div className="planet-properties">
                <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population </span>
                        <span>{ population }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period </span>
                        <span>{ rotationPeriod }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter </span>
                        <span>{ diameter }</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default RandomPlanet;