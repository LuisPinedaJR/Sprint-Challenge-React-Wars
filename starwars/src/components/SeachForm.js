import React, { useState } from 'react'

const SearchForm = props => {
  const [searchInput, setSearchInput] = useState(props.data)
  const handleChange = val => {
    setSearchInput(val)
  }
  return (
    <div>
      <input
        type="text"
        value={searchInput}
        onChange={e => handleChange(e.target.value)}
      />
    </div>
  )
}

export default SearchForm
