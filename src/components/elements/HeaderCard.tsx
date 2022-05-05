import React, { FunctionComponent } from 'react'
import { PokemonDetail, Type } from '../../utils/types/interface'

const HeaderCard:FunctionComponent<{
    name:string,
    pokemonCard:PokemonDetail|null
}> = ({name,pokemonCard}) => {
  return (
   
    <div className="flex justify-around mx-auto items-center max-w-lg my-4">
    <h1 className="text-2xl uppercase font-semibold text-yellow-500  ">
        {name}
    </h1>
    <ul className="flex space-x-8 items-center justify-center">
        {pokemonCard?.types.map((type: Type, index) => (
            <li key={index} className="bg-yellow-600 text-white py-1  rounded-sm text-xs px-3 " >
                {type.type.name}
            </li>
        ))}
    </ul>
</div>
  )
}

export default HeaderCard