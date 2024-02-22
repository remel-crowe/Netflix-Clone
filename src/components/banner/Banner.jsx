import React, { useEffect, useState } from "react";
import "./Banner.scss";
import axios from "../../axios";
import requests from "../../requests";
import { FaPlay } from "react-icons/fa";
import { MdOutlineReplay } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetch() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetch();
  }, []);
  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <h2 className="banner_description">
          {truncate(`${movie.overview}`, 150)}
        </h2>
        <div className="banner_buttons">
          <div className="left_buttons">
            <button className="banner_button play_button">
              <FaPlay />
              <p>Play</p>
            </button>
            <button className="banner_button more_button">
              <IoIosInformationCircleOutline />
              <p>More info</p>
            </button>
          </div>
          <div className="right_buttons">
            <MdOutlineReplay className="replay_button" />
          </div>
        </div>
      </div>
      <div className="banner--fade" />
    </header>
  );
}

export default Banner;
