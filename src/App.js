import { useState } from 'react';

import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

import { SearchContext } from './Context';

import './assets/css/app.css';

function App() {
  const [searchContext, setSearchContext] = useState();
  return (
    <div className="container">
      <SearchContext.Provider value={[searchContext, setSearchContext]}>
        <Header />
        <Content />
      </SearchContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
