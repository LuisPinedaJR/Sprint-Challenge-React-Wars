import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

function CharacterList() {
  const [character, setCharacter] = useState([])

  useEffect(() => {
    axios.get('https://swapi.co/api/people').then(response => {
      console.log(response)
      response.data.results.map(item => setCharacter(item))
    })
  }, [])

  return (
    <div>
      <ul>
        {character.map(char => {
          return <Character data={char} />
        })}
      </ul>
    </div>
  )
}

export default CharacterList
