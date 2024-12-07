<template>
    <div class="flex align project gap-32 pad-32">
      <div class="flex-col gap-16">
        <div style="font-size: 24px; font-weight: bold; text-align : left;">Saltenpepper</div>
        <div class="flex-col gap-16">
          <div class="flex-col gap-8">
            <span> Saltenpepper is a turn-based roguelike RPG developed in collaboration with Alexandre Diboine and Grégoire Delzongue. Its universe revolves around cooking and feeding enemies with delicious dishes. Players create recipes to deal damage during tactical combat. This innovative and entertaining concept made developing the prototype a truly enjoyable experience!</span>
            <span> This project was created by Alexandre Diboine, who came up with the entire idea and concept. I then joined the project to handle the development aspect, and later, Grégoire Delzongue joined the team as well. We chose Unity for its ease of integration and accessibility.
            </span>
          </div>
          <span style="font-weight: bold;">Role : Lead Developer</span>
        </div>
        <div class="flex gap-32">
          <div class="flex-col align" style="width:500px; height: 375px;">
            <Select
              class="flex-col"
              style="width:500px;"
              text="Game Design et Programmation"
              iconBefore="/images/icons/code-icon.svg"
              :delay="300"
              :index="1"
              :activeIndex="activeIndex"
              @update:activeIndex="updateActiveIndex"
            >
            <div class="flex-col">
                <div>Integrated 2D UI elements provided by Alexandre Diboine.</div>
                <div>Developed 3D character movement systems.</div>
                <div>Integrated both 2D and 3D character animations.</div>
                <div>Designed and implemented an item loot system.</div>
                <div>Built a shop and currency system for in-game purchases.</div>
                <div>Implemented various types of lootable and usable items for combat.</div>
                <div>Developed a scene transition system for seamless gameplay flow.</div>
            </div>
            </Select>
            <Select
              class="flex-col"
              style="width:500px;"
              text="Collaborative Contributions"
              icon="/icons/game-design.png"
              :delay="300"
              :index="2"
              :activeIndex="activeIndex"
              @update:activeIndex="updateActiveIndex"
            >
              <div class="flex-col">
                <div>Participated in brainstorming sessions and project design meetings</div>
                <div>Contributed to gameplay mechanics, specifically combat design and game evolution</div>
                <div>Provided insights to refine the game’s design based on tactical balance and player engagement</div>
              </div>
            </Select>
            <Select
              class="flex-col"
              style="width:500px;"
              text="Additional Skills Acquired"
              icon="/icons/game-design.png"
              :delay="300"
              :index="3"
              :activeIndex="activeIndex"
              @update:activeIndex="updateActiveIndex"
            >
              <div class="flex-col">
                  <div>Experience in combining 2D and 3D assets in game development.</div>
                  <div>Advanced understanding of turn-based combat mechanics.</div>
                  <div>Collaboration and communication skills in a small, multidisciplinary team.</div>
                  <div>Iterative prototyping and refining gameplay loops based on team feedback.</div>
                  <div><strong>UI/UX design integration for engaging user experiences.</strong></div>
              </div>
            </Select>
          </div>
          <div  class="flex pad-left-16">
            <VideoLoader backgroundImage="/images/SaltenpepperBackground.png" style="width: 420px; height: 250px" title="Patreon video" videoUrl="patreon_snp.mp4" />
          </div>
      </div>
    </div>
    </div>
  </template>

<script>
import VideoLoader from '@/components/VideoLoader.vue';
import Select from "@/components/library/Select.vue";
export default {
    components: {
      // eslint-disable-next-line vue/no-reserved-component-names
      Select,
      VideoLoader,
    },
  data() {
    return {
      activeIndex: 1, // Index de la ligne active
    };
  },
  methods: {
    updateActiveIndex(index) {
      this.activeIndex = index; // Met à jour l'index actif
    },
  },
};
</script>

  <style scoped>
  .project{
    z-index: 1;
    background-image: url('/videos/noise.svg');
    background-size: cover; /* ou "contain" selon vos besoins */
    background-repeat: no-repeat;
    background-position: center;
    border: 2px solid #0C3D3A;
    border-radius: 20px;
    max-width: 1050px;
    background-color: #051D1F;
  }
  </style>
