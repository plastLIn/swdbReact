import React, {useEffect, useState} from "react";

import './random-planet.css';
import {getPlanet} from "../../net-services";
import Spinner from "../spinner";


const id = Math.floor(Math.random()*25) + 2;

function RandomPlanet () {

    const [name , setName] = useState(null);
    const [population, setPopulation] = useState(null);
    const [rotationPeriod, setRotationPeriod] = useState(null);
    const [diameter, setDiameter] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        getPlanet(id)
            .then((planet) => {
                setName(planet.name);
                setPopulation(planet.population);
                setRotationPeriod(planet.rotationPeriod);
                setDiameter(planet.diameter);
                setLoading(false);
            }, [])
    });

    return (
        <div className="center jumbotron rounded">
            {loading ? <Spinner /> : null}
            {!loading ? (
                <div className="random-planet">
                    <img className="planet-image"
                         src={`https://starwars-visualguide.com/assets/img/planets/${ id }.jpg`}  alt={"Loading or no image"}/>
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
            ) : null}

        </div>
    );
}

export default RandomPlanet;