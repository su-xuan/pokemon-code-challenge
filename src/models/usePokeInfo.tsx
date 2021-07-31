import React, {useState, useEffect} from 'react'
import { POKEMON_URL } from "./constants";


//This function fetchs pokemon info by given id
async function fetchInfo (id: number) {
 return fetch(`${POKEMON_URL}/${id}`).then ((res)=> res.json());
}


export default function usePokeInfo (props: number) {
    const [poke, setPoke] = useState([]);
    useEffect(() => {
        fetchInfo(props).then((poke => setPoke(poke)))
    }, []);

    return poke;
}