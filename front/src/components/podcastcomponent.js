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
    <div className="title-and-button">
      
      <h1 className="podcast-title">{podcast.title}</h1>
      <button className="subscribe-button">S'abonner</button>

      <EpisodeList episodes={podcast.episodes} />
      <Link to="/">Retour à l'accueil</Link> 
    </div>
  );
}

export default PodcastComponent;
