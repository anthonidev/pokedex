import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Pokemon, PokemonState } from "../../utils/types/interface";



const initialState: PokemonState = {
    count: 0,
    next: null,
    previous: null,
    results: null,
    collection:null
    
}

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        pokemons_ok: (state, action: PayloadAction<PokemonState>) => {
            state.count = action.payload.count
            state.next = action.payload.next
            state.previous = action.payload.previous
            state.results = action.payload.results
        },
        pokemon_add: (state, action: PayloadAction<Pokemon[]>) => {
            localStorage.setItem('collection', JSON.stringify(action.payload));
            state.collection  = action.payload
        }
    }
});

export const {
    pokemons_ok,pokemon_add
} = pokemonSlice.actions


export default pokemonSlice.reducer
