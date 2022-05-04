import React, { FunctionComponent, useEffect, useState } from 'react'
import { Language, MorePokemonDetail, Pokemon, PokemonDetail, Type } from '../../types/interface'
import { CgPokemon } from 'react-icons/cg';
import { fadeInUp, stagger } from '../../animation/animations';
import { motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import CardDetail from './CardDetail';





const CardPokemon: FunctionComponent<{
    pokemon: Pokemon
    showDetail: null | string,
    setShowDetail: (url: null | string) => void
}> = ({ pokemon: {
    name,
    url
}, showDetail,
    setShowDetail }) => {
        const [pokemonCard, setPokemonCard] = useState<PokemonDetail>()
        const [morePokemonCard, setMorePokemonCard] = useState<MorePokemonDetail>()
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
        }, [url])

        useEffect(() => {
            if (pokemonCard?.species && pokemonCard) {
                fetch(pokemonCard.species.url)
                    .then(res => res.json())
                    .then(data => {
                        setMorePokemonCard(data)
                        setLoading(false)
                        setError(false)
                    })
                    .catch(err => {
                        setLoading(false)
                        setError(true)
                    })
            }
        }, [pokemonCard])

        return (
            <div className="bg-white flex flex-col justify-center items-center px-5 rounded-md shadow  py-2 ">
                <div className="flex justify-between  w-full">

                    <ul className="flex space-x-2 items-center justify-center">


                        {pokemonCard && pokemonCard.types.map((type: Type, index) => (
                            <li key={index} className="bg-blue-600 text-white py-1 rounded-full text-xs px-2 " >
                                {type.type.name}
                            </li>
                        ))}


                    </ul>
                    <button className="bg-blue-500 hover:bg-yellow-500 text-white  rounded-full text-xs" >
                        <CgPokemon className="h-6 w-6" />
                    </button>
                </div>

                {
                    pokemonCard && (
                        <div className="flex cursor-pointer" onClick={() => setShowDetail(url)}>
                            <img src={pokemonCard.sprites.front_default} alt={name} className="h-36 w-36" />

                        </div>

                    )
                }

                <h1 className="text-xl uppercase tracking-wider font-semibold text-indigo-600 border-t pt-2 ">{name}</h1>
                {
                    morePokemonCard&&pokemonCard && showDetail === url && (
                        <CardDetail pokemonCard={pokemonCard} morePokemonCard={morePokemonCard} name={name} setShowDetail={setShowDetail} />
                    )
                }
            </div>
        )
    }

export default CardPokemon