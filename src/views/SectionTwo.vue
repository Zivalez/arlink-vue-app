<template>
  <div class="section-two">
    <h2>Shin - Sakamoto's Loyal Assistant</h2>
    <p>
      Shin is a former member of the organization that once worked with Sakamoto. After retiring, he became Sakamoto's loyal bodyguard,
      protecting his family at all costs.
    </p>
    
    <div class="section-image">
      <img src="@/assets/shin.png" alt="Shin" />
    </div>
    
    <p>
      Though young and seemingly inexperienced, Shin possesses incredible combat skills and a strong loyalty to the people he cares about.
    </p>

    <footer>
      <button @click="goBack">Back to Home</button>
      <button @click="goToNext">Go to Section 3</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SectionTwo',
  methods: {
    goBack() {
      this.$router.push('/');
    },
    goToNext() {
      this.$router.push('/section3');
    }
  }
};
</script>

<style scoped>
.section-two {
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
