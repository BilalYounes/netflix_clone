import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import OneMovie from "../OneMovie/OneMovie";
import "./ListMovies.scss";
import { photos } from "../../Data";
const ListMovies = () => {
  const [sliderNum, setSliderNum] = useState(0);
  const [ismoveing, setismoveing] = useState(false);
  const listRef = useRef();
  const handleClick = (dir) => {
    setismoveing(true);

    let distance = listRef.current.getBoundingClientRect().x - 50; //this 50 is the width of boxarrow
    if (dir === "left" && sliderNum > 0) {
      setSliderNum(sliderNum - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (dir === "right" && sliderNum < 4) {
      setSliderNum(sliderNum + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }

    // console.log(distance)
  };
  return (
    <div className="listmovie">
      <div className="listmovie__title">Continue Watch</div>
      <div className="listmovie__wrraper">
        <ArrowBackIosOutlined
          className="sliderarrow left"
          style={{ display: !ismoveing && "none" }}
          onClick={() => handleClick("left")}
        />
        <div className="listmovie__continer" ref={listRef}>
          {photos.map((e, index) => (
            <OneMovie picture={e.img} index={index} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderarrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default ListMovies;
