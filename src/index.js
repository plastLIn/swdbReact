//import React from "react";
//import ReactDOM from "react-dom"

const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Couldn't fetch ${url}` + `, received ${res.status}`)
    }
    const body = await res.json();
    return body;
};

getResource('https://swapi.dev/api/people/1/')
    .then((body) => {
        console.log(body);
    })
    .catch((err) => {
        console.error('Couldn\'t fetch', err);
    });