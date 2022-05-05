import Image from 'next/image'
import React, { FunctionComponent } from 'react'

const CardImage: FunctionComponent<{
    url: string,
    name: string
}> = ({ url, name }) => {
    return (
        <div className="flex justify-center items-center max-w-lg mx-auto  bg-cyan-600 rounded-xl ">

            <Image src={url} alt={name} width={200} height={200} layout="intrinsic" />
        </div>

    )
}

export default CardImage