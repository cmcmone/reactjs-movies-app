import React, { useContext } from 'react';

import { SearchContext } from '../../Context';

export default function Content() {
  const [searchContext] = useContext(SearchContext);
  return <div>Here is the content {searchContext} </div>;
}
