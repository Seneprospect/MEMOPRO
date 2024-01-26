// PodcastComponent.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import EpisodeList from '../components/EpisodeList';
import { podcastsData } from '../pages/data';

function PodcastComponent() {
  const { podcastId } = useParams();
  const podcast = podcastsData.find(p => p.id.toString() === podcastId);

  if (!podcast) {
    return <div>Podcast non trouvé</div>;
  }

  return (
    <div>
      <h2>{podcast.title}</h2>
      <button className="subscribe-button">S'abonner</button>
      <EpisodeList episodes={podcast.episodes} />
      <Link to="/">Retour à l'accueil</Link> {/* Ajout du lien de retour à l'accueil */}
    </div>
  );
}

export default PodcastComponent;
