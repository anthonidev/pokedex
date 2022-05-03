import axios from "axios";
import { AppDispatch } from "../configureStore";
import { pokemons_ok } from '../slice/pokemonSlice';

export const get_pokemons = () => async (dispatch: AppDispatch) => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v2/pokemon/`);
        dispatch(pokemons_ok(res.data));
    } catch (err) {
        console.error('Error con el servidor');
    }

}

export const get_pokemon_pages = (url:string) => async (dispatch: AppDispatch) => {
    try {
        const res = await axios.get(url);
        dispatch(pokemons_ok(res.data));
    } catch (err) {
        console.error('Error con el servidor');
    }
}