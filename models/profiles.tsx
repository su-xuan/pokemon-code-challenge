import { useState, useEffect } from "react";
import { Profile } from "../components/types";


export async function fetchAll () {
    const api_url = "https://pokeapi.co/api/v2/pokemon?limit=20"
    return await fetch(api_url).then(res => res.json());
}


export async function fetchOne (url: string) {
  return await fetch(url).then(res => res.json());
}

export async function getPokeById (id: number){
  const api_url = `https://pokeapi.co/api/v2/pokemon/${id}`
  return await fetch(api_url).then(res => res.json());
}

async function getId (url:string) {
 let data= await fetchOne(url)
 let pokemon = {
   id: data.id,
   name: data.name,
   image: data.sprites.front_default
 }
 return pokemon
}

export async function getAll() {
  const List = await fetchAll()
  let PokeArray = []

 for(let item of List.results) {
   var pokemon = await getId(item.url)
   PokeArray.push(pokemon)
 }
  return PokeArray
}