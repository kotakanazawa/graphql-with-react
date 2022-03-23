import React from "react"
import "./CharacterList.css"
import { useCharacters } from "../hooks/useCharacters.js"
import { Link } from 'react-router-dom'

const Characterlist = () => {
  const { error, data, loading } = useCharacters()

  if (loading) {
    return "Loading..."
  }

  if (error) {
    return "something went wrong"
  }

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} />
            <h2>{character.name}</h2>
          </Link>
        )
      })}
    </div>
  )
}

export default Characterlist
