import React from 'react';
import Hero from "./HeroComponent"
import WeAreValorant from './WeAreValorantComponent';
import YourAgents from './YourAgentsComponent';
import YourMaps from './YourMapsComponent';
import CreatorsComponent from './CreatorsComponent';
import EsportsComponent from './EsportsComponent';

function HomePage() {
  return (
    <div>
      <Hero />
      <WeAreValorant />
      <YourAgents />
      <YourMaps />
      <CreatorsComponent />
      <EsportsComponent />
    </div>
  );
}

export default HomePage;