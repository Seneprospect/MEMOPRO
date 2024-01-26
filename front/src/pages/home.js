import React from 'react';
import { Route, Routes, } from 'react-router-dom';
import PodcastList from '../components/PodcastList';
import PodcastComponent from '../components/podcastcomponent';
import { podcastsData, episodesData } from './data';


const Home = () => (
  <div className="wrapper">


    <Routes>
      <Route
        path="/"
        element={<PodcastList podcasts={podcastsData} />}
      />
      <Route
        path="/podcasts/:podcastId"
        element={<PodcastComponent podcasts={podcastsData} episodes={episodesData} />}
      />
    </Routes>

  </div>
);

export default Home;
