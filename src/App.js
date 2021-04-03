import { useState } from 'react';

import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

import { MovieInfoContext } from './Context';

import './assets/css/app.css';

function App() {
  const [movieID, setMovieID] = useState();
  return (
    <div className="container">
      <MovieInfoContext.Provider value={[movieID, setMovieID]}>
        <Header />
        <Content />
      </MovieInfoContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
