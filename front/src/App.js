import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import EpisodeList from './components/EpisodeList';
import Header from './components/header';
import Footer from './components/footer';



function App() {
  return (

    <div className="wrapper">
      <Router>
      <Header />
        <Routes>
        
          <Route path="/" element={<Home />}>
         
          <Route path="/podcasts/:podcastId" element={<EpisodeList />} />     
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

