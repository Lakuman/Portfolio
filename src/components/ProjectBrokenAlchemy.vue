<template>
    <div class="flex align project gap-32">
      <div class="flex-col gap-16">
        <H2>Broken Alchemy</H2>
        <div class="flex-col gap-16">
          
          <div class="flex-col gap-8">
            <span> An Android video game developed in partnership with talented illustrators Gautier Filliard and Eugénie Vallier. Broken Alchemy is a humorous visual novel where you play Alan Bique, an alchemist tasked with taking over his master’s alchemy shop.       </span>
            <span> We chose to develop this project because it allowed us to leverage each team member's individual skills to create a project quickly, efficiently, and within a reasonable budget. Gautier Filliard came up with the idea of a card game set in a potion-themed universe, which we later transformed into a visual novel.
            </span>  
          </div>        
          <span style="font-weight: bold;">Role : Technical Developer / Sound Designer / Product Manager</span>
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
                <li>Système de dialogue et sauvegarde des choix</li>
                <li>Loot d'objets</li>
                <li>Intégration d'interface :
                  <ul>
                    <li>Stockage des objets</li>
                    <li>Options du jeu (Sons et Langues)</li>
                    <li>Récompenses</li>
                    <li>Mini jeu de création de potion</li>
                  </ul>
                </li>
              </ul>
            </Select>
            <Select 
              text="Sound Design & Writing" 
              icon="/public/icons/game-design.png" 
              :delay="300"
              :index="2"
              :activeIndex="activeIndex"
              @update:activeIndex="updateActiveIndex"
            >
              <ul>
                <li>Composed 10 original tracks for the game’s soundtrack</li>
                <li>Integrated UI sound effects and overall sound design</li>
                <li>Wrote 10 out of 50 planned episodes for 3 hours of gameplay.</li>
                <li>Analyzed the narrative impact of player choices.</li>
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
                <li>Team collaboration with artists and writers</li>
                <li>Time and task management for episodic content development</li>
                <li>Creative problem-solving for balancing humor and gameplay mechanics</li>
                <li>Experience integrating narrative-driven mechanics in gameplay</li>
              </ul>
            </Select>
          </div>
        <div  class="pad-left-16">
          <VideoLoader style="width: 420px; height: 250px" title="Broken Alchemy Trailer" videoUrl="trailer_BA.mp4" />
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
    max-height: 921px;
    max-width: 1161px;
    background-color: #073e3a;
  }
  </style>
  