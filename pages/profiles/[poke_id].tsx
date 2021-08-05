import Layout from "../../components/layout"
import Head from "next/head"
import Image from 'next/image'
import Link from "next/link"
import classes from "./[poke_id].module.css"
import { getPokeById } from "../../models/profiles"
import { Profile } from "../../components/types"
import { useRouter } from "next/router"


export default function ProfilePage({Pokemon}) {
  const router = useRouter();
  const {poke_id} = router.query;

  return (
    <Layout>
      <Head>
        <title>Basic Profile</title>
      </Head>
      <section className={classes.profile}>
      <h1>{Pokemon.name}</h1>
      <Image src={Pokemon.sprites.front_default} alt={Pokemon.name} height="200px" width="200px" />
     
      </section>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const Pokemon:Profile = await getPokeById(context.params.poke_id) 
  return {
    props: {
      Pokemon: Pokemon
    }
  }
}