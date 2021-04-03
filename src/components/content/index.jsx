import React, { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';

import '../../assets/css/content.css';
import posterImg from '../../assets/images/noimages.jpg';

import { MovieInfoContext } from '../../Context';
import {
  baseImgURL,
  baseImgW500URL,
  movieDetails,
  popular,
} from '../common/common';

export default function Content() {
  const [movieID, setMovieID] = useContext(MovieInfoContext);
  const [movieDetail, setMovieDetail] = useState({
    backdrop_path: null,
    genres: [],
    poster_path: null,
    production_companies: [],
    release_date: null,
    revenue: null,
    runtime: null,
    tagline: null,
    title: null,
    overview: null,
    vote_average: null,
  });
  const refImg = useRef();

  useEffect(() => {
    upcomingMovies(setMovieID);
  }, [setMovieID]);

  useEffect(() => {
    if (movieID) {
      moviesDetails(movieID, setMovieDetail);
    }
  }, [movieID]);

  useEffect(() => {
    const root = document.getElementById('root');
    if (movieDetail.backdrop_path) {
      document.body.style.backgroundImage = `url(${baseImgURL}/${movieDetail.backdrop_path})`;
      root.style.backgroundColor = '';
    } else {
      document.body.style.backgroundImage = '';
      root.style.backgroundColor = '#000';
    }
  }, [movieDetail]);

  const {
    genres,
    poster_path,
    production_companies,
    release_date,
    revenue,
    runtime,
    tagline,
    title,
    overview,
    vote_average,
  } = movieDetail;

  useEffect(() => {
    refImg.current.src = poster_path
      ? `${baseImgW500URL}${poster_path}`
      : posterImg;
  }, [poster_path]);

  console.log('render:',movieID, poster_path);

  return (
    <div className="content">
      <div className="poster">
        <img
          ref={refImg}
          alt={title}
        />
      </div>
      <div className="data">
        <h1>{title}</h1>
        <span className="tagline">{tagline}</span>
        <p>{overview}</p>
        <div>
          <span className="genre-list">
            {genres.map((item) => item.name).join(', ')}
          </span>
          <span className="production-list">
            {production_companies.map((item) => item.name).join(', ')}
          </span>
        </div>
        <div className="release-details">
          <div className="col-half">
            Release Date:
            <span>{release_date}</span>
          </div>
          <div className="col-half">
            Running Time:
            <span>{runtime} mins</span>
          </div>
          <div className="col-half">
            Revenue:
            <span>
              {!revenue || revenue === 0 ? 0 : revenue.toLocaleString()}
            </span>
          </div>
          <div className="col-half">
            Vote Average:
            <span>{vote_average}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function moviesDetails(movieId, setMovieDetail) {
  const { baseURL, api_key } = movieDetails;
  const moviesUrl = `${baseURL}/${movieId}`;
  return axios
    .get(moviesUrl, {
      params: {
        api_key,
      },
    })
    .then((response) => {
      setMovieDetail(() => {
        return response.data;
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function upcomingMovies(setMovieID) {
  const { baseURL, api_key } = popular;
  return axios
    .get(baseURL, {
      params: {
        api_key,
      },
    })
    .then((response) => {
      const res = response.data.results;
      const random = Math.floor(Math.random() * res.length);
      setMovieID(() => {
        return res[random].id;
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
}
