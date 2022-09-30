import "./Watch.scss"
import trailer2 from "../../imgs/trailer2.mp4";
import {
    ArrowBackIosOutlined,
    ArrowBackOutlined,
    ArrowForwardIosOutlined,
  } from "@material-ui/icons";
import { Link } from "react-router-dom";
const Watch = () => {
  return (
    <div className="watch">
        <div className="watch__wrapper">
          <Link to={"/Home"}>
            <div className="watch__Back">
                <ArrowBackOutlined className="watch__icon"/>
                <span className="back">Home</span>
            </div>
            </Link>
            
            <video src={trailer2} controls progress autoPlay={true}   className="watch__video"></video>
        </div>
    </div>
  )
}

export default Watch