import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./MainMovie.scss";
import Main from "../../imgs/main.jpeg"
const MainMovie = ({type}) => {
  return (
    <div className="mainmovie">
        {type&&(
           <div className="category">
           <span>{type === "movie" ? "Movies" : "Series"}</span>
           <select name="genre" id="genre">
             <option className="option">Genre</option>
             <option className="option" value="adventure">Adventure</option>
             <option className="option" value="comedy">Comedy</option>
             <option className="option" value="crime">Crime</option>
             <option className="option" value="fantasy">Fantasy</option>
             <option className="option" value="historical">Historical</option>
             <option className="option" value="horror">Horror</option>
             <option className="option" value="romance">Romance</option>
             <option className="option" value="sci-fi">Sci-fi</option>
             <option className="option" value="thriller">Thriller</option>
             <option className="option" value="western">Western</option>
             <option className="option" value="animation">Animation</option>
             <option className="option" value="drama">Drama</option>
             <option className="option" value="documentary">Documentary</option>
           </select>
         </div>
        )}
      <div className="mainmovie__imgbox">
        <img
        src={Main }
          alt=""
          className="mainmovie__img"
        />
      </div>
      <div className="mainmovie__info">
      <div className="mainmovie__button">
        <button className="btn btn--play show"><PlayArrow/><span className="mainmovie__span">play</span></button>
        <button className="btn btn--info show"><span className="mainmovie__span" >Add</span></button>
     </div>
     <div className="mainmovie__text">
      <div className="text--desc"> The story, spanning from 1945 to 1955, chronicles the Corleone family under patriarch Vito Corleone (Brando), focusing on the transformation of his youngest son, Michael Corleone (Pacino), from reluctant family outsider to ruthless mafia boss.</div>
       <div className="text--type">Dram -Nov-1968-160min</div>
     </div>
      </div>
     
       
       
     
    </div>
  );
};

export default MainMovie;
