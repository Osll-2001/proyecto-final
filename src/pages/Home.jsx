
import LyricsContainer from '../components/LyricsContainer'
import NavHome from '../components/NavHome'
import { SongProvider } from '../context/SongContext'

const Home = () => {
  return (
    <>
      <SongProvider>
        <NavHome />
        <LyricsContainer />
      </SongProvider>
    </>
  )
}

export default Home
