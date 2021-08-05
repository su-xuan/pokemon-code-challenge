import Link from 'next/link'
import { string } from 'prop-types'
import { Profile } from './types'
import Image from 'next/image'

export default function PokeItem (props) {
    return (

        <Link href={`/profiles/${props.id}`} >
            <a>
                <Image src={props.image} alt={props.name} width="100px" height="100px"/>
                <h5>{props.name}</h5>
            </a>
        </Link>
    )
}