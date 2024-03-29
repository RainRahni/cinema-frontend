<template>
  <div class="whole-movie">
    <div class="movie-item">
      <div class="movie-info">
        <h1 style="color: black"> {{ movie.name }}</h1>
        <h2 style="color: black">{{ formatTime(movie.startTime) }}</h2>
        <h2 style="color: black">{{ movie.language }}</h2>
        <h2 style="color: black">{{ movie.genre }}</h2>
      </div>
      <div class="seat-plan">
        <img src="@/assets/seat-plan.png" alt="seat-plan">
        <p style="color: black">{{ falseSeats }}</p>
      </div>
      <div class="forms">
        <div>
          <input type="text" class="form-control" placeholder="Name" v-model="userName"/>
          <input type="email" class="form-control" placeholder="Email" v-model="email"/>
        </div>
        <div class="seats">
          <h4>Row Number:</h4>
          <input type="number" class="form-control" v-model="rowNumber" :min="1" :max="7"/>
          <h4>Seat Number:</h4>
          <input type="number" class="form-control" v-model="seatNumber" :min="1"
                 :max="getMax()"/>
        </div>
      </div>
      <a href="/" class="finish" style="width: 100%" @click.prevent="finishBooking">Finish</a>
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
.seat-plan {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.seats {
  display: flex;
  justify-content: space-around;
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
    background-color: green;
    border-radius: 0;
  }
}
</style>

<script setup>
import {computed, onMounted, ref} from 'vue';
import {useRouter} from 'vue-router';
import axios from 'axios';

const router = useRouter();
const movieId = ref(window.location.pathname.split('/').pop());
const movie = ref({});
const userName = ref('');
const email = ref('');
const rowNumber = ref(0);
const seatNumber = ref(0);
onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:8080/movie/${movieId.value}`);
    movie.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
const getMax = () => {
  return rowNumber.value === 1 ? 10 : 13;
}
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
        rowSeats.push(`Seat ${seatIndex + 1} `);
      }
    });
    if (rowSeats.length > 0) {
      falseSeats.push(`ROW ${rowIndex + 1}: ${rowSeats.join(', ')} `);
    }
  return falseSeats.join('');
});
  return falseSeats.join('');
});
const finishBooking = async () => {
  try {
    let actualSeatNumber = seatNumber.value;
    if (rowNumber.value > 1) {
      actualSeatNumber += 10 + 13 * (rowNumber.value - 2);
    }
    const response = await axios.post('http://localhost:8080/user/', {
      name: userName.value,
      email: email.value
    }, {
      params: {
        movieId: movieId.value,
        seatNumber: actualSeatNumber
      }
    });
    await router.push("/");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};


</script>

