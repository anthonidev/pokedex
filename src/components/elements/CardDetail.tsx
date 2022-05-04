import React, { FunctionComponent } from 'react'
import { MdClose } from 'react-icons/md'
import { Language, MorePokemonDetail, PokemonDetail, Type } from '../../types/interface'

const CardDetail: FunctionComponent<{
    pokemonCard: PokemonDetail
    morePokemonCard: MorePokemonDetail
    name: string
    setShowDetail: (value: null) => void
}> = ({ pokemonCard, morePokemonCard, name, setShowDetail }) => {
    return (
        <div className="fixed top-14  left-0  lg:flex-row px-5 py-3    w-full bg-cyan-900">

            <div className="flex justify-between mx-auto items-center max-w-lg my-4">
                <h1 className="text-2xl uppercase font-semibold text-yellow-500  ">{name}</h1>

                <ul className="flex space-x-2 items-center justify-center">


                    {pokemonCard && pokemonCard.types.map((type: Type, index) => (
                        <li key={index} className="bg-yellow-600 text-white py-1  rounded-sm text-xs px-3 " >
                            {type.type.name}
                        </li>
                    ))}


                </ul>
            </div>

            <div className="flex justify-center items-center max-w-lg mx-auto  bg-cyan-600 rounded-xl ">

                <img src={pokemonCard.sprites.front_default} alt={name} className="h-auto w-48" />
                <img src={pokemonCard.sprites.back_default} alt={name} className="h-auto w-48 " />
            </div>


            <div className="flex  justify-center items-center space-x-5 ">


                <div className="grid grid-cols-2 gap-4 max-w-lg my-4 p-8 bg-gray-400 rounded-md shadow-lg ">
                    {
                        pokemonCard.stats.map((stat) => (
                            <div className="  items-center space-x-3">
                                <div className="mb-1 text-base font-semibold text-gray-900 ">  {stat.stat.name} <span className="text-gray-600">({stat.base_stat})</span> </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5  overflow-hidden">
                                    <div className="bg-yellow-600 h-2.5 rounded-full max-w-lg" style={{ width: `${stat.base_stat}%` }} ></div>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="flex flex-col bg-gray-400 rounded-md shadow-lg">

                    <article className="my-2 text-gray-900 p-3  max-w-lg">
                        {morePokemonCard?.flavor_text_entries.map((item: Language, index) => {
                            return item.language.name == "es" && index < 50 ?
                                <p className="text-base font-extralight text-justify">{item.flavor_text}</p> : <></>
                        })}
                    </article>

                </div>
            </div>




            <button
                className="absolute top-3 right-3 rounded-full p-1 focus:outline-none bg-gray-200 dark:bg-dark-200 "
                onClick={() => setShowDetail(null)}><MdClose size={30} />
            </button>

        </div>
    )
}

export default CardDetail