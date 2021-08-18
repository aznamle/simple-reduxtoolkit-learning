import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemon } from '../redux/pokemonSlice'

function List() {

    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.pokemon)

    useEffect(() => {
        dispatch(getPokemon())
   }, [dispatch])

    console.log(pokemon)
    return (
        <div>
            {pokemon.results.map((item, i) => (
                <div key={i}>
                    <h1>{item.name}</h1>
                </div>
            ))}
        </div>
    )
}

export default List
