import React, { FunctionComponent } from 'react'
import { MdClose } from 'react-icons/md'
import { Language, MorePokemonDetail, PokemonDetail, Type } from '../../utils/types/interface'
import { motion } from 'framer-motion';
import HeaderCard from './HeaderCard';
import CardImage from './CardImage';
import CardBody from './CardBody';

const CardDetail: FunctionComponent<{
    pokemonCard: PokemonDetail
    morePokemonCard: MorePokemonDetail
    name: string
    setShowDetail: (value: null) => void
}> = ({ pokemonCard, morePokemonCard, name, setShowDetail }) => {
    return (
        <div>
            <motion.div
                animate={{ y: [-50, 0] }}
                transition={{ duration: 0.4, type: 'spring', delay: 0.1 }}
                drag
                dragConstraints={{
                    top: -50,
                    right: 0,
                    bottom: 200,
                    left: 0,
                }}
                whileHover={{ scale: 1.1 }}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                whileTap={{ cursor: "grabbing" }}
                className="hidden md:block  fixed top-14 z-40 px-5 pb-7 rounded-b-lg left-0 md:right-0 lg:left-1/3  max-w-xl bg-cyan-900 cursor-grab">

                <HeaderCard name={name} pokemonCard={pokemonCard} />
                <CardImage url={pokemonCard.sprites.other.dream_world.front_default} name={name} />
                <CardBody pokemonCard={pokemonCard.stats} morePokemonCard={morePokemonCard?.flavor_text_entries} />

                <button
                    className="absolute top-3 right-3 rounded-full  focus:outline-none bg-gray-200 dark:bg-dark-200 "
                    onClick={() => setShowDetail(null)}><MdClose size={30} />
                </button>

            </motion.div>

            <motion.div
                animate={{ y: [-50, 0] }}
                transition={{ duration: 0.4, type: 'spring', delay: 0.1 }}
                className="block md:hidden  fixed top-14 z-40 px-5 pb-7 rounded-b-lg left-0 md:right-0 lg:left-1/3  max-w-xl bg-cyan-900 ">

                <HeaderCard name={name} pokemonCard={pokemonCard} />
                <CardImage url={pokemonCard.sprites.other.dream_world.front_default} name={name} />
                <CardBody pokemonCard={pokemonCard.stats} morePokemonCard={morePokemonCard?.flavor_text_entries} />

                <button
                    className="absolute top-3 right-3 rounded-full  focus:outline-none bg-gray-200 dark:bg-dark-200 "
                    onClick={() => setShowDetail(null)}><MdClose size={30} />
                </button>

            </motion.div>
        </div>
    )
}

export default CardDetail