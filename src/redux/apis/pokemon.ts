import axios from "axios";
import { Pokemon } from "../../types/interface";
import { AppDispatch } from "../configureStore";
import { pokemons_ok, pokemon_add } from '../slice/pokemonSlice';

export const get_pokemons = () => async (dispatch: AppDispatch) => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v2/pokemon/`);
        dispatch(pokemons_ok(res.data));
    } catch (err) {
        console.error('Error con el servidor');
    }

}

export const get_pokemon_pages = (url: string) => async (dispatch: AppDispatch) => {
    try {
        const res = await axios.get(url);
        dispatch(pokemons_ok(res.data));
    } catch (err) {
        console.error('Error con el servidor');
    }
}

export const add_item = (item: Pokemon) => async (dispatch: AppDispatch) => {
    let collection: Pokemon[] = [];
    let shouldAddItem = true;

    if (localStorage.getItem('collection')) {
        collection = JSON.parse(localStorage.getItem('collection') || "[]");
        collection?.map((pokemon: Pokemon) => {
            if (pokemon.url === item.url)
                shouldAddItem = false;
        });
        item
        if (shouldAddItem) {
            collection?.push(item)
            dispatch(pokemon_add(collection));
        } else {
            dispatch(remove(collection, item))
        }

    } else {
        collection.push(item)
        dispatch(pokemon_add(collection));

    }
}

export const get_items = () => async (dispatch: AppDispatch) => {
    let collection: Pokemon[] = [];

    if (localStorage.getItem('collection')) {
        collection = JSON.parse(localStorage.getItem('collection') || "[]");
    }
    dispatch(pokemon_add(collection));

}

export const remove = (collection: Pokemon[], pokemon: Pokemon) => async (dispatch: AppDispatch) => {

    let new_collection: Pokemon[] = [];
    console.log(pokemon);

    collection?.map((item: Pokemon) => {
        if (item.url !== pokemon.url) {
            new_collection?.push(item)
        }
    });

    dispatch(pokemon_add(new_collection));

}