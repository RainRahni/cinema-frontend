<template>
  <div class="whole-page">
    <a v-for="movie in movies.values()" :key="movie.id">
      <div class="movie-item">
        <div class="movie-group">
          <img v-if="movie.genre === 'Action'" class="stack-img" src="~@/assets/movie-one.jpg">
          <img v-else-if="movie.genre === 'Romance'" class="stack-img" src="~@/assets/movie-three.jpg">
          <div class="movie-info" style="padding-left: 2%">
            <h1>{{ movie.name }}</h1>
            <h2>{{ formatTime(movie.startTime) }}</h2>
            <h4>{{ movie.language }}</h4>
            <h4>{{ movie.genre }}</h4>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<style>
.whole-page {
  padding: 3em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.movie-item {
  margin: 10%;
  background-color: white;
  color: black;
  border-radius: 10px;
}

.stack-img {
  display: flex;
  float:right;
  width: 10em;
  height: 9em;
  padding: 10px;
}
</style>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

let movies = ref([]);

const fetchMovies = async () => {
  try {
    const response = await axios.get('http://localhost:8080/movie/all');
    movies.value = response.data;
    console.log(movies.value);
  } catch (error) {
    console.error(error);
  }
};

async function sendMovieToBackend(movie) {
  try {
    const response = await axios.post('http://localhost:8080/movie', movie);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

const movie1 = {
  "name": "The Syke",
  "duration": 180,
  "genre": "Action",
  "language": "Estonian",
  "minimumAge": 12,
  "startTime": "18:30:00"
};

const movie2 = {
  "name": "The Syke 2",
  "duration": 120,
  "genre": "Romance",
  "language": "English",
  "minimumAge": 13,
  "startTime": "12:30:00"
};

onMounted(async () => {
  await fetchMovies();
  if (movies.value && !movies.value.some(movie => movie.name === movie1.name)) {
    await sendMovieToBackend(movie1);
  }
  if (movies.value && !movies.value.some(movie => movie.name === movie2.name)) {
    await sendMovieToBackend(movie2);
  }
  await fetchMovies();
});

const formatTime = (time) => {
  return time ? time.substring(0, 5) : '';
};
</script>
