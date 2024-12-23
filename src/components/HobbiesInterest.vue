<template>
  <div class="parent flex-col">
    <div class="align flex" style="font-size: 32px; font-weight: bold; width: 60%;">{{ $t('hobbies.title') }}</div>
    <div class="flex align pad-top-32 hobbies gap-32">
      <div class="hobby-card flex-col align pad-top-16" v-for="hobby in hobbies" :key="hobby.id">
        <div class="hobby-image">
          <img :src="hobby.image" :alt="hobby.title" />
        </div>
        <div class="hobby-content">
          <h3>{{ hobby.title }}</h3>
          <p>{{ hobby.description }}</p>
          <div class="hobby-details">
            <p>{{ hobby.details }}</p>
          </div>
          <div v-if="hobby.detailsOne" class="hobby-details">
            <p>{{ hobby.detailsOne }}</p>
          </div>
          <div v-if="hobby.detailsTwo" class="hobby-details">
            <p>{{ hobby.detailsTwo }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    hobbies() {
      return [
        {
          id: 1,
          title: this.$t('hobbies.game_master.title'),
          image: "/images/icons/book.svg", // Remplace par le chemin d'une image
          description: this.$t('hobbies.game_master.subtitle'),
          details: this.$t('hobbies.game_master.part_one'),
          detailsOne: this.$t('hobbies.game_master.part_two'),
          detailsTwo: this.$t('hobbies.game_master.part_tree')
        },
        {
          id: 2,
          title: this.$t('hobbies.musician.title'),
          image: "/images/icons/guitar.svg", // Remplace par le chemin d'une image
          description: this.$t('hobbies.musician.subtitle'),
          details: this.$t('hobbies.musician.part_one'),
          detailsOne: this.$t('hobbies.musician.part_two')
        },
      ];
    },
  },
};
</script>

<style scoped>
.hobbies {
  z-index: 1;
  flex-wrap: wrap;
  width: 60%;
}

.hobbies-interests {
  font-family: Arial, sans-serif;
  padding: 2rem;
}

.container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.hobby-card {
  border: 2px solid #0C3D3A;
  border-radius: 20px;
  background-color: #051D1F;
  width: calc(50% - 1rem);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  min-width: 300px;
  min-height: 600px;
}

.hobby-image img {
  width: 100%;
  height: auto;
}

.hobby-content {
  padding: 1.5rem;
  text-align: center;
}

.hobby-content h3 {
  margin: 0.5rem 0;
  font-size: 1.5rem;
  color: white;
}

.hobby-content p {
  font-size: 1rem;
  color: #ddd;
  line-height: 1.5;
}

.hobby-details {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #bbb;
  text-align: left;
}
</style>
