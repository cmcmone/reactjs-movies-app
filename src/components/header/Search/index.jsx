import React, { useContext, useEffect, useState, useRef } from 'react';
import axios from 'axios';

import { axiosKeywordConfig, debounce } from '../../common/common';
import { MovieInfoContext } from '../../../Context';

export default function Search() {
  const [, setMovieID] = useContext(MovieInfoContext);
  const [datalist, setDatalist] = useState([]);
  const inputEl = useRef(null);

  useEffect(() => {
    const newList = datalist.find((item) => item.title === inputEl.current);
    if (!!newList) {
      setMovieID(() => {
        return newList.id;
      });
    }
  }, [datalist, setMovieID]);

  useEffect(() => {
    inputEl.current.focus();
  }, [])

  return (
    <div className='search'>
      <input
        list="movies"
        placeholder="Search Movie Title ..."
        ref={inputEl}
        onChange={(event) => handleChange(event, setDatalist, inputEl)}
        onBlur={() => {
          setDatalist(() => {
            return [];
          });
        }}
      />
      <datalist id="movies">
        {datalist.map((item) => {
          return <option key={item.id} value={item.title}></option>;
        })}
      </datalist>
    </div>
  );
}

const handleChange = debounce((event, setDatalist, inputEl) => {
  const { value } = event.target;
  inputEl.current = value;
  if (value.length > 1) {
    moviesRequest(value, setDatalist);
  }
}, 500);

const moviesRequest = (query, setDatalist) => {
  const { baseURL, api_key, page, include_adult } = axiosKeywordConfig;
  return axios
    .get(baseURL, {
      params: {
        api_key,
        query,
        page,
        include_adult,
      },
    })
    .then((response) => {
      setDatalist(() => {
        return response.data.results;
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
};
