import React from 'react';


// This function takes url fetched from pokemon list api as param, returns a pokemon id
export default function getId (url:string ) {
    const regex = new RegExp(/pokemon\/([\d]{0,})/);

    let PokeId = url && url.match(regex);

    if(PokeId && PokeId.length) {
        return PokeId[1];
    }

    return 0;
}