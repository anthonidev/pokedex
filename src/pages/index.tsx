import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardPokemon from '../components/elements/CardPokemon'
import Layout from '../components/layout/Layout'
import { get_pokemons } from '../redux/apis/pokemon'
import { RootState } from '../redux/configureStore'
import { Pokemon } from '../types/interface'

const Home: NextPage = () => {

  const dispatch: any = useDispatch()
  const pokemons = useSelector((state: RootState) => state.prokemon.results);
  useEffect(() => {
    dispatch(get_pokemons())
  }, [dispatch])



  return (
    <Layout title="Pokedex " content="pokedex by anthoni" >
      <div className="max-w-7xl mx-auto pb-14 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pt-10">
          {
            pokemons?.map((pokemon: Pokemon, index) => (
              <div className="mx-auto" key={index}>
                <CardPokemon pokemon={pokemon} />

              </div>
            ))
          }
        </div>

      </div>
    </Layout>
  )
}

export default Home
