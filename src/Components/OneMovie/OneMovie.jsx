import "./OneMovie.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import trailer2 from "../../imgs/trailer2.mp4";
import { useState } from "react";
import { Link } from "react-router-dom";
const OneMovie = ({ picture, index }) => {
  const [isHover, setisHover] = useState(false);
  return (
    <div
      className="onemovie"
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
      style={{ left: isHover && index * 225 - 50 + index * 2.5 }}
 // the 50 because after hover is beggir 100 halg 100 to center 50 and the 2.5 its the margginf
    >
      <div className="onemovie_boximg">
        <img src={picture} alt="" className="onemovie__img" />
      </div>
      {isHover&& (<>
      <Link to={"/Watch"}>
        <video className="onemovie__video" src={trailer2} autoPlay={true} loop  />

        <div className="onemovie__hover">
        <div className="onemovie__hover--icons">
          <PlayArrow className="icon-liked" />
          <Add className="icon-liked" />
          <ThumbUpAltOutlined className="icon-liked" />
          <ThumbDownOutlined className="icon-liked" />
        </div>
        <div className="onemovie__hover--details">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
        <div className="onemovie__hover--desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam
          placeat repellat deserunt ipsum, atque cumque
        </div>
        <div className="onemovie__hover--genre">Action</div>
      </div></Link>
      </>)}
      
    </div>
  );
};

export default OneMovie;
