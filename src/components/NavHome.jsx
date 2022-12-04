import { useSongContext } from '../context/SongContext'
import { useState } from 'react'
import '../styles/NavHome.css'
import axios from 'axios'

const NavHome = () => {
  const context = useSongContext()
  const [dataSearched, setDataSearched] = useState({
    artist: '',
    song: ''
  })

  const handleData = ({ target: { value, name } }) => {
    setDataSearched({ ...dataSearched, [name]: value })
  }

  const searchSong = async () => {
    const url = `https://api-devf.up.railway.app/songs?name=${dataSearched.song}&band=${dataSearched.artist}`
    const response = await axios.get(url)
    context.setSearchedSong(response.data.data[0])
  }

  return (
    <nav className='NavHome'>
      <div className='elementos' />
      <div className='buscador'>
        <input type='text' value={dataSearched.artist} name='artist' id='inputArtista' className='inputBus' placeholder='Artista' onChange={handleData} />
        <input type='text' value={dataSearched.song} name='song' id='inputCancion' className='inputBus' placeholder='Canción' onChange={handleData} />
        <button className='btnBuscar' onClick={searchSong}>Buscar</button>
      </div>
    </nav>
  )
}

export default NavHome
