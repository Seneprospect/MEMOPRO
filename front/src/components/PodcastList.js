import React from 'react';
import { Link } from 'react-router-dom';

const PodcastList = ({ podcasts }) => (
  <section className="container mt-5">
    <h2>Découvrir des Podcasts</h2>
    <div className="podcast-list">
      {podcasts.length > 0 ? (
        <div className="card-container">
          {podcasts.map(podcast => (
            <div key={podcast.id} className="card">
              <div className="card-text-img">
                <img src={podcast.image} className="card-img-top" alt={podcast.title} />
                <p className="text">{podcast.title}</p>
              </div>
              <div className="card-body">
                <h5 className="card-title">{podcast.title}</h5>
                <p className="card-text">{podcast.description}</p>
                <Link to={`/podcasts/${podcast.id}`} className="btn btn-primary">
                  Écouter
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Aucun podcast trouvé.</p>
      )}
    </div>
  </section>
);

export default PodcastList;
