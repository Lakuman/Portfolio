<template>
  <div class="align flex" style="font-size: 32px; font-weight: bold; width: 60%;">{{$t('coworkers.title')}}</div>
  <div class="coworkers">
    <div  class="coworkers-content flex-col align gap-64">
      <div class="carousel flex gap-64" :style="{ 'flex-wrap': 'nowrap', transform: `translateX(calc(50% - ${(currentIndex * 315) + 120}px))` }">
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
            <a :href="feedback.linkedin" target="_blank" rel="noopener noreferrer">
              <img :src="feedback.image" :alt="feedback.name" />
            </a>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    feedbacks() {
      return [
        {
          name: "Gautier FILLIARD",
          position: this.$t('coworkers.gautier_role'),
          image: "/images/pp-gautier.png",
          linkedin: "https://www.instagram.com/gautierfilliard/",
          quote: this.$t('coworkers.gautier_text'),
        },
        {
          name: "Alexandre DIBOINE",
          position: this.$t('coworkers.alexandre_role'),
          image: "/images/pp-alexandre.png",
          linkedin: "https://www.instagram.com/alexandrediboine/",
          quote: this.$t('coworkers.alexandre_text'),
        },
        {
          name: "Alex GERBER",
          position: this.$t('coworkers.alex_role'),
          image: "/images/pp-alex.jpg",
          linkedin: "https://www.linkedin.com/in/alexgerber/",
          quote: this.$t('coworkers.alex_text'),
        },
        {
          name: "Xavier Chevalier",
          position: this.$t('coworkers.xavier_role'),
          image: "images/pp-xavier.jpg",
          linkedin: "https://www.linkedin.com/in/chevalier-xavier/",
          quote: this.$t('coworkers.xavier_text'),
        },
      ];
    },
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
.coworkers-content {
  padding-top: 64px;
  justify-content: center;
  z-index: 2;
  width: 100%;
  justify-content: center !important;
  align-items: center !important;
  overflow: hidden;
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0));
  -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0));
}

.carousel {
  transition: transform 0.5s ease;
}

.card {
  z-index: 1;
  border: 2px solid #0C3D3A;
  border-radius: 20px;
  width: 250px;
  background-color: #051D1F;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
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

.avatar a {
  text-decoration: none;
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

.card {
  transition: transform 0.5s ease, box-shadow 0.3s ease, opacity 0.5s ease;
}
</style>
