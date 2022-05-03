import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardPokemon from '../components/elements/CardPokemon'
import Layout from '../components/layout/Layout'
import { get_pokemons, get_pokemon_pages } from '../redux/apis/pokemon'
import { RootState } from '../redux/configureStore'
import { Pokemon } from '../types/interface'

import { BsCaretLeftSquareFill, BsCaretRightSquareFill } from 'react-icons/bs'

const Home: NextPage = () => {

  const dispatch: any = useDispatch()
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
      <div className="max-w-7xl mx-auto pb-14 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 pt-10 p-2">
          {
            pokemons?.map((pokemon: Pokemon, index) => (
              <div className="" key={index}>
                <CardPokemon pokemon={pokemon} showDetail={showDetail} setShowDetail={setShowDetail}  />

              </div>
            ))
          }
          <div className="bg-white flex  justify-around items-center px-5 rounded-md shadow  py-2">

            {previous && (
              <button onClick={e => previousPage(previous)}>
                <BsCaretLeftSquareFill className="h-20 w-20" />
              </button>
            )}
            {next && (
              <button onClick={e => nextPage(next)}>
                <BsCaretRightSquareFill className="h-20 w-20" />
              </button>
            )}

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
