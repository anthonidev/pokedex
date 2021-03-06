import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fadeInUp, routeAnimation, stagger } from '../utils/animation/animations'
import CardPokemon from '../components/elements/CardPokemon'
import Layout from '../components/layout/Layout'
import { get_items } from '../redux/apis/pokemon'
import { AppDispatch, RootState } from '../redux/configureStore'
import { Pokemon } from '../utils/types/interface'
import { motion } from 'framer-motion';
import Link from 'next/link'

const Collection = () => {
  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    dispatch(get_items())
  }, [])
  const pokemons = useSelector((state: RootState) => state.prokemon.collection);
  const [showDetail, setShowDetail] = useState<string | null>(null)

  return (
    <Layout title="Pokedex " content="pokedex by anthoni" >
      <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="max-w-7xl mx-auto pb-14  ">
        <motion.div variants={stagger}
          initial="initial"
          animate="animate" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 pt-10 p-2">
         
          {
            pokemons?.length == 0 ? (
              <div className="flex flex-col justify-center items-center col-span-full space-y-8">
                <h1 className="text-blue-600 text-2xl font-semibold text-center">No tienes pokemones en tu colección</h1>
                <Link href="/"><a className="bg-blue-500 p-3 rounded-md hover:bg-blue-700 text-center text-yellow-400 font-extrabold tracking-widest " >Agregar Pokemones</a></Link>
              </div>) : (pokemons?.map((pokemon: Pokemon, index) => (
                <motion.div variants={fadeInUp} key={index}>
                  <CardPokemon pokemon={pokemon} showDetail={showDetail} setShowDetail={setShowDetail} />
                </motion.div>
              )))
          }
        </motion.div>
      </motion.div>
    </Layout >

  )
}

export default Collection