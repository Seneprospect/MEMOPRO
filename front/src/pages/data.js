// data.js

function Episode(id, title, description, audioSrc, date) {
  return { id, title, description, audioSrc, date };
}

function Podcast(id, title, description, image, episodes) {
  return { id, title, description, image, episodes };
}

const episodesData = [
  Episode(1, 'Xam sa diine', 'ndenkaane gii deglu ko yow jullit bi ndax nga mana xam sa diine. Dees na la jangal leep li adjo ci nan nga wara deff ba xam sa diine gi', 'public/audios/audio2.mp3', '2022-01-15'),
  Episode(2, 'Episode 2', 'Description of Episode 2', 'public/audios/audio3.mp3', '2022-01-20'),
  // Ajoutez d'autres épisodes au besoin
];

const podcastsData = [
  Podcast(1, 'Xutba Imaam tuuba', 'Waxtaan ci lu ajju ci itté', '/images/podcast-image.jpg', [episodesData[0], episodesData[1]]),
  Podcast(2, 'Podcast 2', 'Description of Podcast 2', 'image2.jpg', [episodesData[1]]),
  // Ajoutez d'autres podcasts au besoin
];

export { episodesData, podcastsData };
