<template>
    <div class="flex align project gap-32 pad-32">
      <div class="flex-col gap-16">
        <H2>Saltenpepper</H2>
        <div class="flex-col gap-16">
          
          <div class="flex-col gap-8">
            <span> Saltenpepper is a turn-based roguelike RPG developed in collaboration with Alexandre Diboine and Grégoire Delzongue. Its universe revolves around cooking and feeding enemies with delicious dishes. Players create recipes to deal damage during tactical combat. This innovative and entertaining concept made developing the prototype a truly enjoyable experience!</span>
            <span> This project was created by Alexandre Diboine, who came up with the entire idea and concept. I then joined the project to handle the development aspect, and later, Grégoire Delzongue joined the team as well. We chose Unity for its ease of integration and accessibility.
            </span>
          </div>
          <span style="font-weight: bold;">Role : Lead Developer</span>
        </div>
        <div class="flex align">
          <div class="flex-col align" style="height:350px;">
            <Select 
              text="Game Design et Programmation" 
              icon="/public/icons/game-design.png" 
              :delay="300"
              :index="1"
              :activeIndex="activeIndex"
              @update:activeIndex="updateActiveIndex"
            >
            <ul>
                <li>Integrated 2D UI elements provided by Alexandre Diboine.</li>
                <li>Developed 3D character movement systems.</li>
                <li>Integrated both 2D and 3D character animations.</li>
                <li>Designed and implemented an item loot system.</li>
                <li>Built a shop and currency system for in-game purchases.</li>
                <li>Implemented various types of lootable and usable items for combat.</li>
                <li>Developed a scene transition system for seamless gameplay flow.</li>
            </ul>

            </Select>
            <Select 
              text="Collaborative Contributions" 
              icon="/public/icons/game-design.png" 
              :delay="300"
              :index="2"
              :activeIndex="activeIndex"
              @update:activeIndex="updateActiveIndex"
            >
              <ul>
                <li>Participated in brainstorming sessions and project design meetings</li>
                <li>Contributed to gameplay mechanics, specifically combat design and game evolution</li>
                <li>Provided insights to refine the game’s design based on tactical balance and player engagement</li>
              </ul>
            </Select>
            <Select 
              text="Additional Skills Acquired" 
              icon="/public/icons/game-design.png" 
              :delay="300"
              :index="3"
              :activeIndex="activeIndex"
              @update:activeIndex="updateActiveIndex"
            >
            <ul>
                <li>Experience in combining 2D and 3D assets in game development.</li>
                <li>Advanced understanding of turn-based combat mechanics.</li>
                <li>Collaboration and communication skills in a small, multidisciplinary team.</li>
                <li>Iterative prototyping and refining gameplay loops based on team feedback.</li>
                <li><strong>UI/UX design integration for engaging user experiences.</strong></li>
            </ul>

            </Select>
          </div>
        <div  class="pad-left-16">
          <VideoLoader style="width: 420px; height: 250px" title="Patreon video" videoUrl="patreon_snp.mp4" />
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
      rows: [
        { text: "Ligne 1", iconBefore: "icon1.png" },
        { text: "Ligne 2", iconBefore: "icon2.png" },
        { text: "Ligne 3", iconBefore: "icon3.png" },
      ],
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
    border: 1px solid rgb(64, 153, 64);
    border-radius: 10px;
    height: 630px;
    max-width: 900px;
    background-color: #073e3a;
  }
  </style>
  