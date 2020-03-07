import React from 'react'
import styled from 'styled-components'

const CharacterDiv = styled.div`
  margin: 5%;
  opacity: 0.5;
  background-color: #443e3e;
  list-style-type: none;
  align-content: center;
  text-align: center;
`

const CharacterName = styled.p`
  font-size: 20px;
  color: snow;
`
const CharacterDetails = styled.p`
  font-size: 16px;
`
const Character = props => {
  console.log(props.data)
  //   const charArr = Object.values(props)

  return (
    <div>
      <CharacterDiv>
        <CharacterName>Name: {props.data.name}</CharacterName>
        <CharacterDetails>
          <p>Height: {props.data.height}</p>
          <p>Birth Year: {props.data.birth_year}</p>
          <p>Gender: {props.data.gender}</p>
        </CharacterDetails>
      </CharacterDiv>
    </div>
  )
}
export default Character
