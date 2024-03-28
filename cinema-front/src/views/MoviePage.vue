<template>
  <div class="whole-movie">
    <div class="movie-item">
      <div class="movie-info">
        <h1 style="color: black"> {{ movie.name }}</h1>
        <h2 style="color: black">{{ formatTime(movie.startTime) }}</h2>
        <h2 style="color: black">{{ movie.language }}</h2>
        <h2 style="color: black">{{ movie.genre }}</h2>
      </div>
      <img src="@/assets/seat-plan.png">
      <p style="color: black">{{ falseSeats }}</p>
      <h1 style="color: black">mida soovitatakse</h1>
      <div class="forms">
        <div>
          <input type="text" class="form-control" placeholder="Name" v-model="userName"/>
          <input type="email" class="form-control" placeholder="Email" v-model="email"/>
        </div>
        <div>
          <input type="number" class="form-control" placeholder="Row Number" v-model="rowNumber"/>
          <input type="number" class="form-control" placeholder="Seat Number" v-model="seatNumber"/>
        </div>
      </div>
      <a href="/" class="finish" style="width: 100%">Finish</a>
    </div>
  </div>
</template>

<style>
.whole-movie {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.movie-item {
  display: grid;
  justify-content: center;
  background-color: white;
  color: black;
  border-radius: 10px;
  width: 40%;
  margin-top: 1%;
  margin-bottom: 0;
}
.forms {
  display: grid;
  justify-content: space-around;
}
.stack-img {
  display: flex;
  float:right;
  //width: 10em;
  //height: 9em;
  padding: 10px;
}

.movie-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.finish {
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  color: #fff;
  &:hover {
    color: black;
    background-color: green;
    border-radius: 0;
  }
}

</style>

<script setup>
import { ref, onMounted, computed } from 'vue';
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
const seats2D = computed(() => {
  if (!movie.value.seats) {
    return [];
  }

  let seats = movie.value.seats;
  let seats2D = [];
  seats2D.push(seats.slice(0, 10));
  for (let i = 1; i < 7; i++) {
    seats2D.push(seats.slice(10 + 13 * (i - 1), 10 + 13 * i));
  }
  return seats2D;
});
const falseSeats = computed(() => {
  let seats = seats2D.value;
  let falseSeats = [];

  seats.forEach((row, rowIndex) => {
    let rowSeats = [];
    row.forEach((seat, seatIndex) => {
      if (!seat) {
        rowSeats.push(`Seat ${seatIndex + 1}`);
      }
    });
    if (rowSeats.length > 0) {
      falseSeats.push(`Row ${rowIndex + 1}: ${rowSeats.join(', ')}`);
    }

  return falseSeats.join('');
});


  return falseSeats.join('');
});



</script>

