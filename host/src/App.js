import React from 'react';
import Header from '../../sharedComponents/src/components/header/header';
import Footer from '../../sharedComponents/src/components/footer/footer';
import ContentData from './components/contentData/contentData';
import PokemonInfo from './components/pokemonInfo/pokemonInfo';
import './app.css';

const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => (
  <div>
    <Header/>
    <h1>Basic Host-Remote</h1>
    <h2>Host</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
    <ContentData 
        title="Journal intime"
        name="John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    <PokemonInfo/>
    <Footer/>
  </div>
);

export default App;
