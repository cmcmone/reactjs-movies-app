import React, { useContext } from 'react';

import { SearchContext } from '../../../Context';

export default function Search() {
  const [, setSearchContext] = useContext(SearchContext);
  return (
    <div>
      <input
        placeholder="Search Movie Title ..."
        onKeyDown={(e) => {
          handleKeyDown(e, setSearchContext);
        }}
      />
    </div>
  );
}

function handleKeyDown(e, setSearchContext) {
  if (e.keyCode === 13) {
    setSearchContext(e.target.value);
  }
}
