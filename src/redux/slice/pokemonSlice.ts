import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Pokemon, PokemonState } from "../../types/interface";



const initialState: PokemonState = {
    count: 0,
    next: null,
    previous: null,
    results: null
}

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        // onAlert: (state, action: PayloadAction<AlertState>) => {
        //     state.msg = action.payload.msg
        //     state.type = action.payload.type
        // },
        // offAlert: (state) => {
        //     state.msg = null
        //     state.type = null
        // }
        pokemons_ok: (state, action: PayloadAction<PokemonState>) => {
            state.count = action.payload.count
            state.next = action.payload.next
            state.previous = action.payload.previous
            state.results = action.payload.results
        },
        pokemon_ok: (state, action: PayloadAction<Pokemon[]>) => {
            state.results  = action.payload
        }
    }
});


export const {
    pokemons_ok
} = pokemonSlice.actions


export default pokemonSlice.reducer
