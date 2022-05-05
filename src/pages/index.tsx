import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardPokemon from '../components/elements/CardPokemon'
import Layout from '../components/layout/Layout'
import { get_pokemons, get_pokemon_pages } from '../redux/apis/pokemon'
import { AppDispatch, RootState } from '../redux/configureStore'
import { Pokemon } from '../utils/types/interface'
import { motion } from 'framer-motion';

import { BsCaretLeftSquareFill, BsCaretRightSquareFill } from 'react-icons/bs'
import { fadeInUp, routeAnimation, stagger } from '../utils/animation/animations'
import { Grid,  } from 'react-loader-spinner'

const Home: NextPage = () => {
  let timer1 = setTimeout(() => setRender(true), 500)

  const dispatch: AppDispatch = useDispatch()
  const previous = useSelector((state: RootState) => state.prokemon.previous);
  const next = useSelector((state: RootState) => state.prokemon.next);
  const pokemons = useSelector((state: RootState) => state.prokemon.results);
  const [showDetail, setShowDetail] = useState<string | null>(null)
  const [render, setRender] = useState(false)

  useEffect(() => {
    dispatch(get_pokemons())
    return () => {
      clearTimeout(timer1)
    }
  }, [dispatch])

  function nextPage(next: string) {

    setRender(false)
    dispatch(get_pokemon_pages(next))
    window.scrollTo(0, 0);
    return () => {
      clearTimeout(timer1)
    }

  }

  function previousPage(previous: string) {
    setRender(false)
    dispatch(get_pokemon_pages(previous))
    window.scrollTo(0, 0);
    return () => {
      clearTimeout(timer1)
    }

  }

  return (
    <Layout title="Pokedex " content="pokedex by anthoni" >
      <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="max-w-7xl mx-auto  ">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 pt-10 p-2">

          {
            render && pokemons?.map((pokemon: Pokemon, index) => (
              <motion.div variants={fadeInUp} key={index}>
                <CardPokemon pokemon={pokemon} showDetail={showDetail} setShowDetail={setShowDetail} />

              </motion.div>
            ))
          }

        </motion.div>
        {!render && (
          <div className="flex justify-center items-center w-full ">
            <Grid
              height="200"
              width="200"
              color='blue'
              ariaLabel='loading'
            />
          </div>
        )}
        <div className="2xl:hidden p-2 fixed bg-white w-full bottom-0 border-t rounded-t-xl ">
          <div className="flex justify-center space-x-5  ">

            {previous && (
              <button className=" " onClick={e => previousPage(previous)}>
                <BsCaretLeftSquareFill className="h-10 w-10 text-blue-600" />
              </button>
            )}
            {next && (
              <button className="" onClick={e => nextPage(next)}>
                <BsCaretRightSquareFill className="h-10 w-10 text-blue-600" />
              </button>
            )}

          </div>
        </div>
        <div className="hidden 2xl:block  ">
          <div className="  ">

            {previous && (
              <button className="left-2 top-1/2 fixed " onClick={e => previousPage(previous)}>
                <BsCaretLeftSquareFill className="h-32 w-32 text-blue-600" />
              </button>
            )}
            {next && (
              <button className="right-2 top-1/2 fixed " onClick={e => nextPage(next)}>
                <BsCaretRightSquareFill className="h-32 w-32 text-blue-600" />
              </button>
            )}

          </div>
        </div>

      </motion.div>
    </Layout>
  )
}

export default Home
