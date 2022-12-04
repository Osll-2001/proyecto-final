import { Link } from 'react-router-dom'
import { useSongContext } from '../context/SongContext'
import '../styles/LyricsContainer.css'

const LyricsContainer = () => {
  const context = useSongContext()

  return (
    <div className='containerLyrics'>
      {context.searchedSong === undefined
        ? <>
          <h1>:(</h1>
          <div className='lyricsMusic'>
            <textarea name='txtALyrics' id='txtALyrics' value='La Canción No Ha Encuentrado, Verifique El Nombre De La Banda O Canción' readOnly />
          </div>
          </>
        : context.searchedSong._id
          ? <>
            <div className='infoMusic'>
              <p><span className='info-title'>Nombre</span>{context.searchedSong.name}</p>
              <p><span className='info-title'>Banda</span>{context.searchedSong.band}</p>
              <p><span className='info-title'>Album</span>{context.searchedSong.album}</p>
              <p><span className='info-title'>Año</span>{context.searchedSong.releaseYear}</p>
              <p><span className='info-title'>Duración</span>{context.searchedSong.length}</p>
              <p><span className='info-title'>Genero</span>{context.searchedSong.genre}</p>
              <button className='btnSong'><a href={context.searchedSong.link} target='blank' className='linkSong'>Escuchar</a></button>
            </div>
            <div className='lyricsMusic'>
              <textarea name='txtALyrics' id='txtALyrics' value={context.searchedSong.lyrics} readOnly />
            </div>
          </>
          : <>
            <h1>:)</h1>
            <div className='lyricsMusic'>
              <textarea name='txtALyrics' id='txtALyrics' value='Busca Una Canción, Especificando El Nombre Y La Banda O Artista' readOnly />
            </div>
          </>}
    </div>
  )
}

export default LyricsContainer
