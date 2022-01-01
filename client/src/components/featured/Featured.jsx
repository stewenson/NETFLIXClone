/* eslint-disable react-hooks/exhaustive-deps */
import './featured.scss';
import { useEffect, useState } from "react";
import axios from 'axios';

//import PlayArrowIcon from '@mui/icons-material/PlayArrow';
//import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Featured({type}) {
    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
          try {
            const res = await axios.get(`/movies/random?type=${type}`, {
              headers: {
                token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzg5MGI5YjliYTI1NzBlYmEwMmZkNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTA0NjI2MCwiZXhwIjoxNjQxNDc4MjYwfQ.mgljGzli8j6KJHuE9R0tcUMRg5z49IYj30a6mJre6PY",
            },
            });
            setContent(res.data[0]);
          } catch (err) {
            console.log(err);
          }
        };
        getRandomContent();
      }, [type]);

    return (
        <div className='featured'>
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movie" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
       <img
            src={content.img}
            alt=""
          />
          <div className="info">
            <img
                src={content.imgTitle}
                alt=""
            />
            <span className='desc'>
                {content.desc}
            </span>
            <div className="buttons">
                <button className='play'>
                   {/*  <PlayArrowIcon />*/}
                    <span>Play</span>
                </button>
                <button className='more'>
                   {/* <InfoOutlinedIcon /> */}
                    <span>More</span>
                </button>
            </div>
          </div>
        </div>
    )
}
