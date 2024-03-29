<template>
  <nav class="navbar navbar-expand fixed-top">
    <div class="container">
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <div class="navbar-nav">
          <ul>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:5173/">Movies</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<style>


nav a:hover {
  border-radius: 5px;
  background-color: white;
  color:black;
}

.navbar {
  --color-background: var(--vt-c-black);
  box-shadow: 0 14px 80px rgba(34, 35, 58, 0.2);
}
.navbar-nav {
  display: flex;
}
.nav-item {
  padding: 10px;
}
.nav-link {
  color:white;
}
.profileIcon:hover {
  background-color: white;
}

</style>
<script setup>
</script>