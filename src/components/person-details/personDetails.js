import React, {useEffect, useState} from "react";
import {getPerson} from "../../net-services";

import './personDetails.css'

export function PersonDetails (props) {

    const [ person, setPerson ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const { onChangePerson } = props;

    useEffect(() => {
        if (onChangePerson != null) {
            getPerson(onChangePerson)
                .then((pers) => {
                    setPerson(pers);
                    setLoading(false);
                })
        }

    }, [onChangePerson]);

    return (
    <div className="item-list list-group jumbotron">
        {loading ? <span>Select Character</span> : null}
        {!loading ? (
            <div>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${ person.id }.jpg`}
                     className="character-image"/>
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
            </div>
        ) : null}

    </div>
    )
}