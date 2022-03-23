import React from 'react';
import "./Character.css"
import { useCharacter } from '../hooks/useCharacter'
import { useParams } from 'react-router'

const Character = () => {
  const { id } = useParams();

  const { error, data, loading } = useCharacter(id)

  if (loading) {
    return "Loading..."
  }

  if (error) {
    return "something went wrong"
  }

  return (
    <div className="Character">
      <img src={data.character.image} width={750} height={750} alt={`hogehoge`}/>
      <div className="Character-content">
        <h2>{data.character.name}</h2>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map(episode => {
            return <div>
              {episode.name} - {episode.episode}
            </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default Character;
