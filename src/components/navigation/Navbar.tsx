import Link from 'next/link';
import React from 'react'
import { MdCatchingPokemon } from 'react-icons/md';
function Navbar() {
    return (
        <nav className="bg-blue-600 w-full h-14 p-2 sticky top-0">
            <ul className="flex items-center max-w-7xl mx-auto justify-between">
                <li className="text-yellow-400 text-3xl font-extrabold tracking-widest">
                    <Link href="/">
                        <a  className="font-marker">POKEDEX</a>
                    </Link>

                </li>
                <li className=" text-white hover:text-yellow-400 ">
                    <Link href="/collection">
                        <a ><MdCatchingPokemon className="h-8 w-8 " /></a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar