<template>
  <div id="app" class="app-container">
    <header class="app-header">
      <h1 class="title">Sakamoto Days</h1>
      <p class="subtitle">Former hitman turned convenience store owner.</p>
    </header>
    
    <router-view />
    
    <footer class="app-footer">
      <p>Developed by Zivalez</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
.app-container {
  font-family: 'Arial', sans-serif;
  background-color: #1f1f1f;
  color: white;
  text-align: center;
  min-height: 100vh;
}

.app-header {
  background-color: #d32f2f;
  padding: 20px 0;
}

.title {
  font-size: 36px;
  font-weight: bold;
}

.subtitle {
  font-size: 18px;
  margin-top: 10px;
}

.app-footer {
  background-color: #333;
  padding: 10px;
  margin-top: auto;
}
</style>
