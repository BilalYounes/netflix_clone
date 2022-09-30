import ListMovies from "../../Components/ListMovies/ListMovies"
import MainMovie from "../../Components/MainMovie/MainMovie"
import Navbar from "../../Components/Navbar/Navbar"
import "./Home.scss"
const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <MainMovie type="movie" />
        <ListMovies/>
         <ListMovies/>
         <ListMovies/>
         <ListMovies/>
         <ListMovies/>
         <ListMovies/>
    </div>
  )
}

export default Home