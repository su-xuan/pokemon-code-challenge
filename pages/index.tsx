import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { fetchAll, getAll } from "../models/profiles";
import PokeList from "../components/PokeList";
import { useEffect, useState } from "react";
import { PokemonData, BasicData } from "../components/types";

export default function Home({list}) {
  // const DummyData = [
  //   { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/", image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
  //   { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/", image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
  //   { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" },
  //   { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
  //   { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" },
  //   { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" },
  // ];

  return (
    <Layout home>
      <Head>
        <title>Pokedex</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <PokeList results={list} />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const pokemon = await getAll();

  return {
    props: {
      list: pokemon,
    },
  };
}
