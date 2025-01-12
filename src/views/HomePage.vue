<template>
  <div class="home-page">
    <header>
      <h2 class="welcome-message">Welcome to Sakamoto's Convenience Store!</h2>
      <p class="intro-text">
        Former hitman, now leading a quiet life. But who knows? The past always catches up...
      </p>
    </header>
    
    <section class="hero-section">
      <img src="@/assets/sakamoto-hero.png" alt="Sakamoto" class="hero-image" />
      <div class="hero-action">
        <button @click="goToSection('section1')">Go to Section 1</button>
      </div>
    </section>

    <footer>
      <p>&copy; 2025 Sakamoto Days App</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    goToSection(section) {
      this.$router.push(`/${section}`);
    }
  }
};
</script>

<style scoped>
.home-page {
  text-align: center;
  padding: 20px;
}

.welcome-message {
  font-size: 30px;
  font-weight: bold;
  color: #ff8a65;
}

.intro-text {
  font-size: 18px;
  margin-top: 10px;
  color: #ccc;
}

.hero-section {
  background-color: #333;
  padding: 40px 0;
}

.hero-image {
  max-width: 600px;
  width: 100%;
  margin-bottom: 20px;
}

.hero-action button {
  padding: 15px 30px;
  background-color: #ff5722;
  border: none;
  cursor: pointer;
  font-size: 18px;
  border-radius: 10px;
  color: white;
}

.hero-action button:hover {
  background-color: #e64a19;
}

footer {
  background-color: #222;
  padding: 10px;
  margin-top: auto;
}
</style>
