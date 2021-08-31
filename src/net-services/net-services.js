//import React from "react";

const apiUrl = 'https://swapi.dev/api';

async function getResource (url) {
    const res = await fetch(`${apiUrl}${url}`);
    if (!res.ok) {
        throw new Error(`Couldn't fetch ${url}` + `, received ${res.status}`)
    }
    return res.json();
};

async function getAllPeople () {return await getResource(`/people/`); }

async function getPerson (id) {
    return await getResource(`/people/${id}/`);
}

async function getAllPlanets() {
    return await getResource(`/planets/`);
}

async function getPlanet(id) {
    return await getResource(`/planets/${ id }`);
}

async function getAllStarships() {
    return await getResource(`/starships/`);
}

async function getStarship(id) {
    return await getResource(`/starships/${ id }`);
}

export { getAllPeople, getPerson, getAllPlanets, getPlanet, getAllStarships, getStarship };