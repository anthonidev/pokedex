export interface Pokemon {
    name: string
    url: string
    image:string
}

export interface PokemonState {
    count: number
    next: string | null
    preview: string | null
    results: Pokemon[] | null
}