// EpisodeItem.js
import React from 'react';

const EpisodeItem = ({ episode }) => (
  <li className="episode-item">
    <div className="episode-info">
      <h4>{episode.title}</h4>
      <p className="episode-date">{episode.date}</p>
      <p>{episode.description}</p>
    </div>
    <audio controls>
      <source src={episode.audioSrc} type="audio/mpeg" />
      Votre navigateur ne supporte pas l'audio HTML5.
    </audio>
  </li>
);

export default EpisodeItem;
