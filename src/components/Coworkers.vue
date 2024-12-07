<template>
  <div class="align flex" style="font-size: 32px; font-weight: bold; text-align: left;">Coworkers</div>
  <div class="flex-col gap-32 pad-top-64 align coworkers">
      <div
        class="carousel flex gap-32"
        :style="{ 'flex-wrap': 'nowrap', transform: `translateX(calc(50% - ${(currentIndex * 260) + 130}px))` }"
      >
        <div
          v-for="(feedback, index) in feedbacks"
          :key="index"
          class="card"
          :style="{
            transform: currentIndex === index ? 'scale(1.2)' : 'scale(0.9)',
            opacity: currentIndex === index ? 1 : 0.5,
          }"
        >
          <div class="avatar">
            <img :src="feedback.image" :alt="feedback.name" />
          </div>
          <p class="quote">"{{ feedback.quote }}"</p>
          <p class="name">{{ feedback.name }}</p>
          <p class="position">{{ feedback.position }}</p>
        </div>
      </div>
      <div class="flex gap-16">
        <button class="prev" @click="prevSlide">&#8592;</button>
        <button class="next" @click="nextSlide">&#8594;</button>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      feedbacks: [
        {
          name: "Alice Johnson",
          position: "Marketing Manager",
          image: "https://via.placeholder.com/80",
          quote: "Cleo is a fantastic team player and always goes above and beyond.",
        },
        {
          name: "Bob Smith",
          position: "Software Engineer",
          image: "https://via.placeholder.com/80",
          quote: "Working with Cleo has been an absolute pleasure!",
        },
        {
          name: "Charlie Davis",
          position: "Product Designer",
          image: "https://via.placeholder.com/80",
          quote: "Cleo's attention to detail and creativity are unmatched.",
        },
        {
          name: "Diana Rose",
          position: "Data Scientist",
          image: "https://via.placeholder.com/80",
          quote: "Cleo's analytical skills and problem-solving mindset are inspiring.",
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.feedbacks.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.feedbacks.length) % this.feedbacks.length;
    },
  },
};
</script>

<style scoped>
.carousel {
  transition: transform 0.5s ease;
}

.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  width: 250px;
  text-align: center;
  transition: transform 0.5s ease, box-shadow 0.3s ease, opacity 0.3s ease;
}

.card:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.avatar img {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
}

.quote {
  font-style: italic;
  margin: 1rem 0;
}

.name {
  font-weight: bold;
  margin: 0.5rem 0;
}

.position {
  color: gray;
  font-size: 0.9rem;
}

button {
  background-color: #5a9;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin: 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
}

button:hover {
  background-color: #48a;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.coworkers {
  z-index: 1;
  max-width: 1050px;
  height: 500px;
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0));
  -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0));
}

.card {
  transition: transform 0.5s ease, box-shadow 0.3s ease, opacity 0.5s ease;
}
</style>
