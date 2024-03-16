<template>
  <div class="whole-page">
    <a>
    <div class="movie-item">
        <div class="movie-group">
          <img class="stack-img" src="~@/assets/movie-one.jpg">
          <div class="ed-info" style="padding-left: 2%">
            <h1>Shadow Strike</h1>
            <h2>19:10</h2>
            <h4>English</h4>
            <h4>Action</h4>
          </div>
        </div>
    </div>
    </a>
    <a>
    <div class="movie-item">
      <div class="movie-group">
        <img class="stack-img" src="~@/assets/movie-two.jpg">
        <div class="movie-info" style="padding-left: 2%">
          <h1>Heartstrings</h1>
          <h2>15:00</h2>
          <h4>English</h4>
          <h4>Romance</h4>
        </div>
      </div>
    </div>
    </a>
    <a href="www.google.com" target="_blank">
    <div class="movie-item">
      <div class="movie-group">
        <img class="stack-img" src="~@/assets/movie-three.jpg">
        <div class="ed-info" style="padding-left: 2%">
          <h1>Surmalõks</h1>
          <h2>11:00</h2>
          <h4>Estonian</h4>
          <h4>Action</h4>
        </div>
      </div>
    </div>
    </a>
    <a>
    <div class="movie-item">
      <div class="movie-group">
        <img class="stack-img" src="~@/assets/movie-four.jpg">
        <div class="movie-info" style="padding-left: 2%">
          <h1>Eternal Love</h1>
          <h2>22:40</h2>
          <h4>English</h4>
          <h4>Romance</h4>
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
    height: 10em;
    padding: 10px;
  }
</style>
<script setup>
</script>