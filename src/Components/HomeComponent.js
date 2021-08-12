import React from 'react';
import Hero from "./HeroComponent"
import WeAreValorant from './WeAreValorantComponent';
import YourAgents from './YourAgentsComponent';
import YourMaps from './YourMapsComponent';

function HomePage() {
  return (
    <div>
      <Hero />
      <WeAreValorant />
      <YourAgents />
      <YourMaps />
    </div>
  );
}

export default HomePage;