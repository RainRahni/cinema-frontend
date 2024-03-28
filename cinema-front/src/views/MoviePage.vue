<template>
  <div class="whole-page">
    <div class="movie-item">
      <h1 style="color: black">Nimi</h1>
      <h1 style="color: black">Zanr</h1>
      <h1 style="color: black">Kellaeg</h1>
      <h1 style="color: black">Keel</h1>
      <h1 style="color: black">seatid pilt</h1>
      <h1 style="color: black">loetuelu vabadest kohadest </h1>
      <h1 style="color: black">mida soovitatakse</h1>

      <h1 style="color: black">mis row ja tahad</h1>
      <h1 style="color: black">sisesta nimi</h1>
      <h1 style="color: black">sisesta email</h1>
      <h1 style="color: black">button lõpetuseks</h1>




    </div>

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

const movieId = ref(window.location.pathname.split('/').pop());
const movie = ref({});
onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:8080/movie/${movieId.value}`);
    movie.value = response.data;
  } catch (error) {
    console.error(error);
  }
});

const formatTime = (time) => {
  return time ? time.substring(0, 5) : '';
};
</script>
