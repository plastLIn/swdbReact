import React, {useEffect, useState} from "react";
import {getAllPeople} from "../../net-services";

import './ItemList.css'
import Spinner from "../spinner";

export function ItemList (props) {

    const [ people, setPeople ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const { onItemSelected } = props;

    useEffect(() => {
        getAllPeople()
            .then((persons) => {

                setLoading(false)
                setPeople(persons);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return(
        <div>
            {loading ? <Spinner/> : null}
            {!loading ? (
                <ul className="item-list list-group">
                    {people.map((pers) => {
                        return (
                            <li className="list-group-item item-list-custom"
                                id={ pers.id }
                                key={ pers.id }
                                onClick={ () => onItemSelected(pers.id) }>
                                { pers.name }
                            </li>
                        )
                    })}
                </ul>
            ) : null}

        </div>
    )
}