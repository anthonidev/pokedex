import React, { FunctionComponent, useEffect, useState } from 'react'
import { Pokemon } from '../../types/interface'

export interface PokemonDetail {
    sprites: Sprites
}
export interface Sprites {
    back_default: string
    front_default: string

}

const CardPokemon: FunctionComponent<{
    pokemon: Pokemon
}> = ({ pokemon: {
    name,
    url
} }) => {
        const [pokemonCard, setPokemonCard] = useState<PokemonDetail>()
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState(false)
        useEffect(() => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setPokemonCard(data)
                    setLoading(false)
                    setError(false)
                })
                .catch(err => {
                    setLoading(false)
                    setError(true)
                })
        }, [])


        return (
            <div className="bg-red-500 flex flex-col justify-center items-center px-5 rounded-md shadow  py-2">
                {
                    pokemonCard && (
                        <div>
                            <img src={pokemonCard.sprites.front_default} alt={name} className="h-36 w-36" />
                            <img src={pokemonCard.sprites.back_default} alt={name} className="h-36 w-36 " />
                        </div>

                    )
                }
               
                <h1 className="text-xl uppercase tracking-wider font-semibold text-indigo-600 border-t pt-2">{name}</h1>

            </div>
        )
    }

export default CardPokemon