import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'
import SearchForm from './SeachForm'

function CharacterList() {
  const [character, setCharacter] = useState([])

  useEffect(() => {
    axios.get('https://swapi.co/api/people/').then(response => {
      console.log(response.data.results)
      setCharacter(response.data.results)
    })
  }, [])

  return (
    <div>
      <ul className="list">
        {character.map(char => {
          return <Character data={char} key={char.url} />
        })}
      </ul>
      <SearchForm data={character} />
    </div>
  )
}

export default CharacterList
