import React, { FunctionComponent, useEffect, useState } from 'react'
import { MorePokemonDetail, Pokemon, PokemonDetail, Type } from '../../utils/types/interface'
import { CgPokemon } from 'react-icons/cg';
import { fadeInUp, stagger } from '../../utils/animation/animations';
import { motion } from 'framer-motion';
import CardDetail from './CardDetail';
import { useDispatch, useSelector } from 'react-redux';
import { add_item } from '../../redux/apis/pokemon';
import { AppDispatch, RootState } from '../../redux/configureStore';

import { Oval } from 'react-loader-spinner'

const delay = 5;

const CardPokemon: FunctionComponent<{
    pokemon: Pokemon
    showDetail: null | string,
    setShowDetail: (url: null | string) => void
}> = ({ pokemon: {
    name,
    url
}, showDetail,
    setShowDetail }) => {
        const dispatch: AppDispatch = useDispatch()

        const [pokemonCard, setPokemonCard] = useState<PokemonDetail>()
        const [morePokemonCard, setMorePokemonCard] = useState<MorePokemonDetail>()
        const [addCollection, setAddCollection] = useState(false)
        const pokemons = useSelector((state: RootState) => state.prokemon.collection);
        const [show, setShow] = useState(false);

        useEffect(() => {
            let timer1 = setTimeout(() => setShow(true), delay * 1000);
            const found = pokemons?.find(element => element.url === url);
            found ? setAddCollection(true) : setAddCollection(false)
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setPokemonCard(data)
                    clearTimeout(timer1);
                })
                .catch(err => {
                    console.log(err);
                })
        }, [url, pokemons])

        useEffect(() => {
            if (pokemonCard?.species && pokemonCard) {
                fetch(pokemonCard.species.url)
                    .then(res => res.json())
                    .then(data => {
                        setMorePokemonCard(data)
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        }, [pokemonCard])

        const addPokemon = (name: string, url: string) => {
            dispatch(add_item({ name: name, url: url }))
        }
        return (
            <motion.div
                className="bg-white flex flex-col justify-center items-center px-5 rounded-md shadow  py-2 "
                variants={stagger}
                initial="initial"
                animate="animate"
            >
                <div className="flex justify-between  w-full">

                    <ul className="flex space-x-2 items-center justify-center">
                        {pokemonCard && pokemonCard.types.map((type: Type, index) => (
                            <motion.li variants={fadeInUp} key={index} className="bg-blue-600 text-white py-1 rounded-full text-xs px-2 " >
                                {type.type.name}
                            </motion.li>
                        ))}
                    </ul>

                    <motion.button
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        onClick={() => addPokemon(name, url)}
                        className={` hover:bg-yellow-500 text-white  rounded-full text-xs ${addCollection ? "bg-yellow-400" : "bg-blue-500"}`}
                    >
                        <CgPokemon className="h-6 w-6" />
                    </motion.button>

                </div>

                {
                    pokemonCard && !show ? (
                        <motion.div variants={fadeInUp} className="flex cursor-pointer" onClick={() => setShowDetail(url)}>
                            <img src={pokemonCard.sprites.front_default} alt={name} className="h-36 w-36" />
                        </motion.div>
                    ) : (<Oval
                        height="100"
                        width="100"
                        color='grey'
                        ariaLabel='loading'
                    />)
                }

                <motion.h1 variants={fadeInUp} className="text-xl uppercase tracking-wider font-semibold text-indigo-600 border-t pt-2 ">{name}</motion.h1>
                {
                    morePokemonCard && pokemonCard && showDetail === url && (
                        <CardDetail pokemonCard={pokemonCard} morePokemonCard={morePokemonCard} name={name} setShowDetail={setShowDetail} />
                    )
                }
            </motion.div>
        )
    }

export default CardPokemon