import { createContext, useContext, useState } from 'react'

const SongContext = createContext()

function SongProvider (props) {
  const [searchedSong, setSearchedSong] = useState({})

  const value = {
    searchedSong,
    setSearchedSong
  }

  return (
    <SongContext.Provider value={value}>
      {props.children}
    </SongContext.Provider>
  )
}

const useSongContext = () => {
  const context = useContext(SongContext)
  return context
}

export {
  SongProvider,
  useSongContext
}
