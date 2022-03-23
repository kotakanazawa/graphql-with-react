import { useState } from "react"
import { gql, useLazyQuery } from "@apollo/client"

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`

const Search = () => {
  const [name, setName] = useState("")

  const [getLocations, { loading, error, data, called }] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
    variables:{
      name
    }
  })

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <div>spinner...</div>}
      {error && <div>something went wrong</div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return <li>{character.location.name}</li>
          })}
        </ul>
      )}
    </div>
  )
}

export default Search
