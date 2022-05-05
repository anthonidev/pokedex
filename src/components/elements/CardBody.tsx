import React, { FunctionComponent } from 'react'
import { Language, Stats } from '../../utils/types/interface'

const CardBody: FunctionComponent<{
    pokemonCard:Stats[]
    morePokemonCard:Language[]
}> = ({pokemonCard,morePokemonCard}) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-lg mx-auto">

                    <div className=" grid grid-cols-2 gap-x-10 gap-y-3 my-3 bg-cyan-600 rounded-md w-full p-4">
                        {
                            pokemonCard.map((stat, index) => (
                                <div key={index} className="  items-center">
                                    <div className="mb-1 text-base font-semibold text-gray-900 ">  {stat.stat.name} <span className="text-gray-600">({stat.base_stat})</span> </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5  overflow-hidden">
                                        <div className="bg-yellow-600 h-2.5 rounded-full max-w-lg" style={{ width: `${stat.base_stat}%` }} ></div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                    <div className="bg-cyan-200 p-4 rounded-md ">
                        <article className="">
                            {morePokemonCard.map((item: Language, index) => {
                                return item.language.name == "es" && index < 50 && <p className="text-base font-extralight text-justify font-noticia" key={index}>{item.flavor_text}</p>

                            })}
                        </article>
                    </div>
                </div>
  )
}

export default CardBody