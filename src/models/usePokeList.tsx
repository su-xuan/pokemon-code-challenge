import React, { useState, useEffect } from "react";
import { POKEMON_URL } from "./constants";

//This function fetchs pokemon list
async function fetchList() {
  const apiUrl = `${POKEMON_URL}?limit=1118`;
  return fetch(apiUrl).then((res) => res.json());
}

export default function usePokeList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchList().then((list) => setList(list.results));
  }, []);
  return list;
}
