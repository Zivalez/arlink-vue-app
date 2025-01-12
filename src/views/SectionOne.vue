<template>
  <div class="section-one">
    <h2>Sakamoto - The Retired Hitman</h2>
    <p>
      Sakamoto was an elite hitman, known for his extraordinary skills. However, after meeting his wife and having a child,
      he chose to retire and live a quieter life as the owner of a convenience store.
    </p>
    
    <div class="section-image">
      <img src="@/assets/sakamoto-action.png" alt="Sakamoto Action" />
    </div>
    
    <p>
      Although his life appears normal, Sakamoto's combat skills should never be underestimated. Who knows, this new life may not
      last long without interruptions from his past...
    </p>

    <footer>
      <button @click="goBack">Back to Home</button>
      <button @click="goToNext">Go to Section 2</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SectionOne',
  methods: {
    goBack() {
      this.$router.push('/');
    },
    goToNext() {
      this.$router.push('/section2');
    }
  }
};
</script>

<style scoped>
.section-one {
  padding: 20px;
  color: white;
}

h2 {
  font-size: 28px;
  font-weight: bold;
  color: #ff5722;
}

.section-image img {
  max-width: 100%;
  width: 600px;
  margin-top: 20px;
  border-radius: 10px;
}

button {
  padding: 10px 20px;
  background-color: #ff5722;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: white;
  border-radius: 5px;
  margin-top: 10px;
}

button:hover {
  background-color: #e64a19;
}
</style>
