<template>
  <div class="parent flex-col">
    <div class="align flex" style="font-size: 32px; font-weight: bold; width: 60%;">Hobbies & Interest</div>
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
          <div :v-if="hobby.detailsOne" class="hobby-details">
            <p>{{ hobby.detailsOne }}</p>
          </div>
          <div :v-if="hobby.detailsTwo" class="hobby-details">
            <p>{{ hobby.detailsTwo }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hobbies: [
        {
          id: 1,
          title: "Game Master",
          image: "/images/icons/book.svg", // Remplace par le chemin d'une image
          description: "Game Master in the D&D Universe: ",
          details:
            "Since 2017, I embarked on a major role-playing game adventure, creating several campaigns, but the most significant one remains “The Lands of Baldur”: A role-playing game following the rules of D&D in a Medieval Fantasy universe entirely designed by me.",
          detailsOne:
            "I initially created small towns and had a single group of players participate in these areas for the first campaign. However, my map quickly expanded, the number of groups taking part in the stories grew, and I soon found myself with a gigantic map, hundreds of NPCs, and an ever-expanding world.",
          detailsTwo:
            "This universe has accompanied and shaped me up to this day, reaffirming my desire to contribute to professional creative projects.",
          },
        {
          id: 2,
          title: "Musician",
          image: "/images/icons/guitar.svg", // Remplace par le chemin d'une image
          description: "Musician in a Hard Rock Band:",
          details:
            "Since 2021, I have been part of a Hard Rock band as a guitarist. I’ve been making music since I was 15, and I also studied at the Annecy Conservatory of Music. Practicing this activity in a group has really enhanced my artistic thinking.",
          detailsOne: "I’ve had the time to develop my listening and communication skills. Music has become an even more integral part of my projects, and I’ve come to appreciate even more working on sound design in my creative endeavors.",
          },
      ],
    };
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
