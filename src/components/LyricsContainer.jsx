import '../styles/LyricsContainer.css'

const LyricsContainer = () => {
  return (
    <div className='containerLyrics'>
      <div className='infoMusic'>
        <h5>Name</h5>
        <h5>Band</h5>
        <h5>Album</h5>
        <h5>Year</h5>
        <h5>leght</h5>
        <h5>Genre</h5>
      </div>
      <div className='lyricsMusic'>
        <textarea name='txtALyrics' id='txtALyrics' value='Lyrics' readOnly />
      </div>
    </div>
  )
}

export default LyricsContainer
