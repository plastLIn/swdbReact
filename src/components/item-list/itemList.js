import React, {useEffect, useState} from "react";
import {getAllPeople} from "../../net-services";

import './ItemList.css'

export function ItemList (props) {

    const [ people, setPeople ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const { onPersonSelected } = props;

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

    // let innerList = null;
    // if (items === null) {innerList = (<span>Loading</span>)}
    // else {innerList = items}
    return(
        <div>
            {loading && <span>Loading...</span>}
            {people.length && (
                <ul className="item-list list-group">
                    {people.map((pers) => {
                        return (
                            <li className="list-group-item item-list-custom"
                                id={ pers.id }
                                key={ pers.id }
                                onClick={ () => onPersonSelected(pers.id) }>
                                { pers.name }
                            </li>
                        )
                    })}
                </ul>
            )}

        </div>
    )
}