import { useEffect, useState } from "react";
import "./listItem.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import  axios  from "axios";
import { Link } from "react-router-dom";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async () =>{
      try {
        const res = await axios.get("/movies/find/"+ item,{
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzg5MGI5YjliYTI1NzBlYmEwMmZkNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTA0NjI2MCwiZXhwIjoxNjQxNDc4MjYwfQ.mgljGzli8j6KJHuE9R0tcUMRg5z49IYj30a6mJre6PY",
          }
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    getMovie();
  }, [item]);


  return (
    <Link to={{pathname: "/watch", movie: movie}}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={movie.img}
          alt=""
        />
        {isHovered && (
          <div>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrowIcon className="icon" />
                <AddIcon className="icon" />
                <ThumbUpOutlinedIcon className="icon" />
                <ThumbDownOutlinedIcon className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">
              {movie.desc}
              </div>
              <div className="genre">{movie.genre}</div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}