import React from 'react';
import { NavLink } from 'react-router-dom';

const Podcast = ({ podcast }) => (
  <div>
    <h2>{podcast.title}</h2>
    <p>{podcast.description}</p>
    <NavLink to={`/podcasts/${podcast.id}`} >Voir les épisodes</NavLink>
  </div>
  
);

export default Podcast;
