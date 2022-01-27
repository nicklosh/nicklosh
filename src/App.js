import './styles/App.scss';
import React from 'react';
import LinkMenu from './LinkMenu';
import Bull from './images/Bull';

const App = () => {
  return (
    <div>
      <div className="container">

        <div className="layer overflow">
          <div className="layer">
            <div className="triangle"></div>
          </div>
          <div className="layer rotate_90">
            <div className="triangle"></div>
          </div>
          <div className="layer rotate_180">
            <div className="triangle"></div>
          </div>
          <div className="layer rotate_270">
            <div className="triangle"></div>
          </div>
        </div>

        <div className="layer spin overflow">
          <div className="layer">
            <div className="triangle"></div>
          </div>
          <div className="layer rotate_90">
            <div className="triangle"></div>
          </div>
          <div className="layer rotate_180">
            <div className="triangle"></div>
          </div>
          <div className="layer rotate_270">
            <div className="triangle"></div>
          </div>
        </div>

        <div className="layer overflow">
          <div className="hexagon_shadow">
            <div className="hexagon"></div>          
          </div>
        </div>
      
        <div className="layer">
          <Bull className="bull"/>
        </div>

      </div>
      <LinkMenu />
    </div>
  )
}

export default App;