import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardPokemon from '../components/elements/CardPokemon'
import Layout from '../components/layout/Layout'
import { get_items } from '../redux/apis/pokemon'
import { AppDispatch, RootState } from '../redux/configureStore'
import { Pokemon } from '../types/interface'

const Collection = () => {
  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    dispatch(get_items())
  }, [])
  const pokemons = useSelector((state: RootState) => state.prokemon.collection);
  const [showDetail, setShowDetail] = useState<string | null>(null)

  return (
    <Layout title="Pokedex " content="pokedex by anthoni" >
      <div className="max-w-7xl mx-auto pb-14  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 pt-10 p-2">
          {
            pokemons?.map((pokemon: Pokemon, index) => (
              <div className="" key={index}>
                <CardPokemon pokemon={pokemon} showDetail={showDetail} setShowDetail={setShowDetail} />

              </div>
            ))
          }
        </div>
      </div>
    </Layout >

  )
}

export default Collection