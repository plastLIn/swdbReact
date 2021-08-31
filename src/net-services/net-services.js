//import React from "react";

const apiUrl = 'https://swapi.dev/api';

async function getResource (url) {
    const res = await fetch(`${apiUrl}${url}`);
    if (!res.ok) {
        throw new Error(`Couldn't fetch ${url}, received ${res.status}`)
    }
    return res.json();
}

async function getAllPeople () {
    const res = await getResource(`/people/`);
    return res.results.map(transformPerson)
}

async function getPerson (id) {
    const res = await getResource(`/people/${id}/`);
    return transformPerson(res);
}

async function getAllPlanets() {
    const res = await getResource(`/planets/`);
    return res.results.map(transformPlanet);
}

async function getPlanet(id) {
    const res = await getResource(`/planets/${ id }`);
    return transformPlanet(res);
}

async function getAllStarships() {
    const res = await getResource(`/starships/`);
    return res.results.map(transformStarship)
}

async function getStarship(id) {
    const res = await getResource(`/starships/${ id }`);
    return transformStarship(res);
}

function extractedId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
}

function transformPlanet(planet){
    return {
        id: extractedId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
    }
}

function transformStarship(starship) {
    return {
        id: extractedId(starship),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costinCredits: starship.costInCredits,
        length: starship.length,
        crew: starship.passengers,
        cargocapacity: starship.cargoCapacity
    }
}

function transformPerson (person) {
    return {
        id: extractedId(person),
        name: person.name,
        birthYear:person.birthYear,
        eyeColor: person.eyeColor
    }
}

export { getAllPeople, getPerson, getAllPlanets, getPlanet, getAllStarships, getStarship };