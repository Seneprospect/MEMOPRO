// EpisodeList.js
import React from 'react';
import EpisodeItem from './EpisodeItem';

const EpisodeList = ({ episodes }) => {
  if (!episodes || episodes.length === 0) {
    return <div>Aucun épisode disponible</div>;
  }

  return (
    <ul className="episode-list">
      {episodes.map(episode => (
        <EpisodeItem key={episode.id} episode={episode} />
      ))}
    </ul>
  );
};

export default EpisodeList;
