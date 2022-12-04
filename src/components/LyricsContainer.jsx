import { Link } from 'react-router-dom'
import { useSongContext } from '../context/SongContext'
import '../styles/LyricsContainer.css'

const LyricsContainer = () => {
  const context = useSongContext()

  return (
    <div className='containerLyrics'>
      {context.searchedSong === undefined
        ? <h1 className=''>Canción no encontrada</h1>
        : context.searchedSong._id
          ? <>
            <div className='infoMusic'>
              <h5><span className='info-title'>Nombre</span>{context.searchedSong.name}</h5>
              <h5><span className='info-title'>Banda</span>{context.searchedSong.band}</h5>
              <h5><span className='info-title'>Album</span>{context.searchedSong.album}</h5>
              <h5><span className='info-title'>Año</span>{context.searchedSong.releaseYear}</h5>
              <h5><span className='info-title'>Duración</span>{context.searchedSong.length}</h5>
              <h5><span className='info-title'>Genero</span>{context.searchedSong.genre}</h5>
              <a href={context.searchedSong.link} target='blank'>Escuchar</a>
            </div>
            <div className='lyricsMusic'>
              <textarea name='txtALyrics' id='txtALyrics' value={context.searchedSong.lyrics} readOnly />
            </div>
            </>
          : <h1>Busque una Canción</h1>}
    </div>
  )
}

export default LyricsContainer
