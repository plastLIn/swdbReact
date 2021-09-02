import React, {useEffect, useState} from "react";
import {getPerson} from "../../net-services";

import './personDetails.css'
import Spinner from "../spinner";

export function PersonDetails ({ onChangePerson } ) {
    const [ person, setPerson ] = useState(null);
    const [ loading, setLoading ] = useState(Boolean(onChangePerson));

    useEffect(() => {
        if (onChangePerson) {
            setLoading(true)
            getPerson(onChangePerson)
                .then((pers) => {
                    setPerson(pers);
                    setLoading(false);
                })
        }

    }, [onChangePerson]);

    return (
    <div className="item-list list-group jumbotron">
        {!person && <span className="select-character">Select Character</span>}
        {loading && <Spinner /> }
        {(person && !loading) && (
            <React.Fragment>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${ person.id }.jpg`}
                     className="character-image"
                     alt="Error"/>
                <ul className="person-details">
                    <h4>{ person.name }</h4>
                    <li className="list-group-item">
                        <span>Gender </span>
                        <span>{ person.gender }</span>
                    </li>
                    <li className="list-group-item">
                        <span>Birth Year </span>
                        <span>{ person.birthYear }</span>
                    </li>
                    <li className="list-group-item">
                        <span>Eye Color </span>
                        <span>{ person.eyeColor }</span>
                    </li>
                </ul>
            </React.Fragment>
        ) }

    </div>
    )
}