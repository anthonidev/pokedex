import axios from "axios";
import { Pokemon } from "../../utils/types/interface";
import { AppDispatch } from "../configureStore";
import { pokemons_ok, pokemon_add } from '../slice/pokemonSlice';
import { setAlert } from "./alert";

export const get_pokemons = () => async (dispatch: AppDispatch) => {
    await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v2/pokemon/`)
        .then(res => {
            dispatch(pokemons_ok(res.data))
        })
        .catch(err => { console.log(err) })
}

export const get_pokemon_pages = (url: string) => async (dispatch: AppDispatch) => {
    await axios.get(url)
        .then(res => {
            dispatch(pokemons_ok(res.data))
        })
        .catch(err => { console.log("error") })
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
            dispatch(setAlert("Pokemon agregado a la coleccion","green"))
        } else {
            dispatch(remove(collection, item))
            dispatch(setAlert("Pokemon eliminado de la coleccion","yellow"))

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