export interface PokemonState {
    count: number
    next: string | null
    previous: string | null
    results: Pokemon[] | null
    collection:Pokemon[]|null
}

export interface Pokemon {
    name: string
    url: string
}

export interface PokemonDetail {
    sprites: Sprites
    types: Type[]
    species: {
        url: string
    }
    stats:Stats[]
}

export interface Stats {
    base_stat:number
    stat:{
        name:string
    }
}

export interface MorePokemonDetail {
    flavor_text_entries: Language[]
}

export interface Language {
    flavor_text: string
    language: {
        name: string
    }
}

export interface Sprites {
    back_default: string
    front_default: string
    other:{
        dream_world:{
            front_default:string
        }
    }
}

export interface Type {
    type: {
        name: string
    }
}