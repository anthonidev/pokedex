import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardPokemon from '../components/elements/CardPokemon'
import Layout from '../components/layout/Layout'
import { get_pokemons, get_pokemon_pages } from '../redux/apis/pokemon'
import { AppDispatch, RootState } from '../redux/configureStore'
import { Pokemon } from '../types/interface'

import { BsCaretLeftSquareFill, BsCaretRightSquareFill } from 'react-icons/bs'

const Home: NextPage = () => {

  const dispatch: AppDispatch = useDispatch()
  const previous = useSelector((state: RootState) => state.prokemon.previous);
  const next = useSelector((state: RootState) => state.prokemon.next);
  const pokemons = useSelector((state: RootState) => state.prokemon.results);
  const [showDetail, setShowDetail] = useState<string | null>(null)


  useEffect(() => {
    dispatch(get_pokemons())
  }, [dispatch])

  function nextPage(next: string) {
    dispatch(get_pokemon_pages(next))
    window.scrollTo(0, 0);
  }

  function previousPage(previous: string) {
    dispatch(get_pokemon_pages(previous))
    window.scrollTo(0, 0);

  }

  return (
    <Layout title="Pokedex " content="pokedex by anthoni" >
      <div className="max-w-7xl mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 pt-10 p-2">
          {
            pokemons?.map((pokemon: Pokemon, index) => (
              <div key={index}>
                <CardPokemon pokemon={pokemon} showDetail={showDetail} setShowDetail={setShowDetail} />

              </div>
            ))
          }

        </div>
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

      </div>
    </Layout>
  )
}

export default Home
