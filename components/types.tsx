export interface BasicData {
    name: string,
    url?: string,
}


export interface PokemonData {
    results: IndexData[]
}

export interface IndexData extends BasicData{
    image:string,
    id: number
}

interface Ability {
    ability: BasicData,
    is_hidden: boolean,
    slot: number
} 

interface Indice {
    game_indice: number,
    version: BasicData
}

interface Item {
    item: BasicData,
    version_details: Version[]
}

interface Version {
    rarity: number,
    version: BasicData
}

interface Move {
    move: BasicData,
    version_group_details: Version_Detail[]
}

interface Version_Detail {
    level_learned_at: number,
    move_learned_method: BasicData
}

interface Stat {
    base_stat: number,
    effort: number,
    stat: BasicData
}

interface Type {
    slot: number,
    type: BasicData
}

export interface Profile {
    abilities?: Ability[],
    base_experience?: number,
    forms?: BasicData[],
    game_indices?: Indice[],
    height?: number,
    held_items?:Item[],
    id: number,
    is_default?:boolean,
    location_area_encounters?: string,
    moves?: Move[],
    name: string,
    order?: number,
    past_types?: any,
    species?: BasicData[],
    sprites?: any,
    stats?: Stat[],
    types?: Type[],
    weight?: number
}