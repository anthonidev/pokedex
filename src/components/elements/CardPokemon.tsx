import React, { FunctionComponent, useEffect, useState } from 'react'
import { Pokemon } from '../../types/interface'
import { CgPokemon } from 'react-icons/cg';
import { fadeInUp, stagger } from '../../animation/animations';
import { motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';

export interface PokemonDetail {
    sprites: Sprites
    types: Type[]
}
export interface Sprites {
    back_default: string
    front_default: string

}

export interface Type {
    type: {
        name: string
    }
}


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


        return (
            <div className="bg-white flex flex-col justify-center items-center px-5 rounded-md shadow  py-2">
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
                        <div className="flex" onClick={() => setShowDetail(url)}>
                            <img src={pokemonCard.sprites.front_default} alt={name} className="h-36 w-36" />
                            <img src={pokemonCard.sprites.back_default} alt={name} className="h-36 w-36 " />
                        </div>

                    )
                }

                <h1 className="text-xl uppercase tracking-wider font-semibold text-indigo-600 border-t pt-2">{name}</h1>
                {
                    pokemonCard && showDetail === url && (
                        <div className="fixed top-14 flex justify-end  left-0 w-full bg-cyan-600">
                            <div className="flex">
                                <img src={pokemonCard.sprites.front_default} alt={name} className="h-36 w-36" />
                                <img src={pokemonCard.sprites.back_default} alt={name} className="h-36 w-36 " />
                            </div>
                            {/* <motion.div variants={fadeInUp} className="flex justify-center my-4 space-x-3">
                                    <a href={github_url} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 hover:dark:bg-dev-200 space-x-3 text-lg text-dev border border-dev rounded-lg bg-gray-200 dark:bg-dark-200">
                                        <AiFillGithub /> <span className="tracking-wide ">Github</span>
                                    </a>

                                </motion.div> */}

                            <motion.div variants={stagger} initial="initial" animate="animate">
                                <motion.h2 variants={fadeInUp} className="mb-3 text-xl md:text-1xl  lg:text-3xl font-medium  tracking-wide text-let-100">{name}</motion.h2>
                                <motion.div variants={fadeInUp} className="grid  grid-cols-12 gap-4 ">
                                    <ul className="flex space-x-2 items-center justify-center">


                                        {pokemonCard && pokemonCard.types.map((type: Type, index) => (
                                            <li key={index} className="bg-blue-600 text-white py-1 rounded-full text-xs px-2 " >
                                                {type.type.name}
                                            </li>
                                        ))}


                                    </ul>
                                </motion.div>
                                <button
                                    className="absolute top-3 right-3 rounded-full p-1 focus:outline-none bg-gray-200 dark:bg-dark-200 "
                                    onClick={() => setShowDetail(null)}><MdClose size={30} /></button>
                            </motion.div>

                        </div>
                    )

                }
            </div>
        )
    }

export default CardPokemon