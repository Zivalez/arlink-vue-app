<template>
  <div class="section-three">
    <h2>The Story Continues...</h2>
    <p>
      The story of Sakamoto and his team continues. As new threats emerge, they must rely on each other to survive and protect those they care about.
    </p>
    
    <div class="section-image">
      <img src="@/assets/sakamoto-team.png" alt="Sakamoto and Team" />
    </div>
    
    <p>
      What will happen next? Will Sakamoto's past finally catch up with him? Or will he continue his quiet life with his family?
    </p>

    <footer>
      <button @click="goBack">Back to Section 2</button>
      <button @click="goHome">Back to Home</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SectionThree',
  methods: {
    goBack() {
      this.$router.push('/section2');
    },
    goHome() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.section-three {
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
